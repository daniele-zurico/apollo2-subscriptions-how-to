import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const postSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			posts: [Post]
        }
        type Mutation {
            addPost(author: String, comment: String): Post
        }
		type Post {
			author: String
			comment: String
		}
		type Subscription {
			postAdded: Post
		}
	`
});
addMockFunctionsToSchema({ schema: postSchema });

export default postSchema;