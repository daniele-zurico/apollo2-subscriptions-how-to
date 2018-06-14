import { addMockFunctionsToSchema, makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import postType from "./post.type";
import postQuery from "./post.query";
import postSubscription from "./post.subscription";
import postMutation from "./post.mutation";

const postSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [postType, postQuery, postMutation, postSubscription]
});
addMockFunctionsToSchema({ schema: postSchema });

export { postSchema };
