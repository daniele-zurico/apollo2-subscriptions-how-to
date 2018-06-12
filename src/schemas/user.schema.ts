import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const userSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			users: [User]
			validateUser(idToken: String): User
		}
		type User {
			_id: String
			email: String
			name: String
			picture: String
			given_name: String
			family_name: String
			locale: String
		}
	`
});
addMockFunctionsToSchema({ schema: userSchema });

export default userSchema;
