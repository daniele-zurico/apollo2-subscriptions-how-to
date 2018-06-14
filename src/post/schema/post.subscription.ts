import { gql } from "apollo-server";

const postSubscription = gql`
	type Subscription {
		postAdded: Post
	}
`;

export { postSubscription };
