import { gql } from "apollo-server";

const postQuery = gql`
	type Query {
		posts: [Post]
	}
`;

export { postQuery };
