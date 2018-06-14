import { gql } from "apollo-server";

const userType = gql`
	type User {
		_id: String
		email: String
		name: String
		picture: String
		given_name: String
		family_name: String
		locale: String
	}
`;

export { userType };
