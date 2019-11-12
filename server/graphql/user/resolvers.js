export const resolvers = {
	Query: {
		users: async (_, __, { DB: { User } }) => {
			try {
				return User.find().sort({ createdAt: -1 });
			} catch (error) {
				console.log('TCL: error', error);
			}
		}
	}
};
