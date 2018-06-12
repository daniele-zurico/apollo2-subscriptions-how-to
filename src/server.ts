import { ApolloServer, PubSub } from "apollo-server";
import mongoose from "mongoose";
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";
const { OAuth2Client } = require("google-auth-library");
import schemas from "./schemas/schema";
import resolvers from "./resolvers/resolvers";
import { userController } from "./controllers/controllers";

import { CLIENT_ID, DB_NAME, MONGO_PORT, MONGO_URL } from "./util/secrets";

export const pubsub = new PubSub();

export const client = new OAuth2Client(CLIENT_ID);
// help to debug mongoose
mongoose.set("debug", true);

mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${DB_NAME}`);

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

// GraphQL
const server = new ApolloServer({
	schema,
	context: async ({ req }: any) => {
		if (!req || !req.headers) {
      		return;
    	}
		const token = req.headers.authorization || "";
		const checkToken = await userController.findOrCreateUser(token);
		if (!checkToken.hasOwnProperty('authorized')) {
			return {user: checkToken, authorized: true};
		}	
		return checkToken;
	},
	tracing: true,
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});