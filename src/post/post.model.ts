import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	author: String,
	comment: String
});

const Post = mongoose.model("posts", PostSchema);
export { Post };
