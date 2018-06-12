import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	email: String,
	name: String,
	picture: String,
	given_name: String,
	family_name: String,
	locale: String
});

const User = mongoose.model("users", UserSchema);


export { User };
