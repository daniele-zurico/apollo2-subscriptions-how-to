import { gql } from "apollo-server";

const postMutation = gql`
	type Mutation {
		addPost(author: String, comment: String): Post
	}
`;
export { postMutation };
