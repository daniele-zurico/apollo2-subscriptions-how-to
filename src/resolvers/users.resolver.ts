import { userController } from "../controllers/controllers";
import { AuthenticationError } from "apollo-server";
const userResolver = {
	Query: {
		users(root: any, args: any, context: any) {
			console.log(context);
			if (!context.authorized){
				console.error('User not authorized');
				throw new AuthenticationError("you must be logged in");
			}  
			return userController.users(root, args.user);
		},
		validateUser(root: any, args: any) {
			return userController.findOrCreateUser(args.idToken);
		}
	}
};

export default userResolver;
