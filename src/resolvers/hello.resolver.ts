const helloResolver = {
	Query: {
		hello: () => {
			return "Hello world!";
		}
	}
};

export default helloResolver;
