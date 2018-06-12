import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const helloSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			hello: String
		}
	`
});
addMockFunctionsToSchema({ schema: helloSchema });

export default helloSchema;
