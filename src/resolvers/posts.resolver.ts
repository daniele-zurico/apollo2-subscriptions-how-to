import { postController } from "../controllers/controllers";
import { pubsub } from "../server";

const POST_ADDED = 'POST_ADDED';

const postResolver = {
    Subscription: {
        postAdded: {
            subscribe: () => pubsub.asyncIterator([POST_ADDED])
        }
    },
    Query: {
		posts(root: any, args: any, context: any) {
			return postController.posts();
		}
    },
    Mutation: {
        addPost(root: any, args: any, context: any) {
            pubsub.publish(POST_ADDED, { postAdded: args });
            return postController.addPost(args);
        }
    }
};

export default postResolver;
