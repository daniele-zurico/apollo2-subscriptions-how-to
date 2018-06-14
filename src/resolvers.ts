import { userResolver } from "./user";
import { helloResolver } from "./hello";
import { postResolver } from "./post";
const resolvers = [userResolver, helloResolver, postResolver];

export default resolvers;
