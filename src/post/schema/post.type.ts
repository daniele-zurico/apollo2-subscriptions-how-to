import { gql } from "apollo-server";

const postType = gql`
	type Post {
		author: String
		comment: String
	}
`;

export { postType };
