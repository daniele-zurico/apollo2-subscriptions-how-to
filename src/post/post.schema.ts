import { addMockFunctionsToSchema, makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { postType, postQuery, postMutation, postSubscription } from "./schema";

const postSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [postType, postQuery, postMutation, postSubscription]
});
addMockFunctionsToSchema({ schema: postSchema });

export { postSchema };
