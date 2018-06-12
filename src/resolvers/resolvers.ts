import helloResolver from "./hello.resolver";
import userResolver from "./users.resolver";
import postResolver from "./posts.resolver";

const resolvers = [userResolver, helloResolver, postResolver];

export default resolvers;
