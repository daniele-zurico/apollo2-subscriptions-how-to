import { client } from "../server";
import { CLIENT_ID } from "../common/util/secrets";
import { User } from "./user.model";

const userController = {
	users: (root: any, args: any) => User.find({}),

	findOrCreateUser: async (token: string) => {
		if (!token) {
			return { authorized: false };
		}
		const googleUser = await userController.verifyGoogleToken(token);
		const user = await userController.checkIfUserExists(googleUser.email);
		if (user) {
			return user;
		} else {
			return userController.saveUser(googleUser);
		}
	},
	checkIfUserExists: (email: string) => {
		return User.findOne({ email }).exec();
	},
	saveUser: (gUser: any) => {
		const { email, name, picture, given_name, family_name, locale } = gUser;
		const user = { email, name, picture, given_name, family_name, locale };
		const newUser = new User(user);
		return newUser.save();
	},
	verifyGoogleToken: async (token: string) => {
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: CLIENT_ID
		});
		return ticket.getPayload();
	}
};

export { userController };
