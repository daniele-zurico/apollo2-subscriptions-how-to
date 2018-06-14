const helloResolver = {
	Query: {
		hello: () => {
			return "Hello world!";
		}
	}
};

export { helloResolver };
