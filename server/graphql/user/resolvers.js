import { DB } from '../../entities';
const { User } = DB;

export const resolvers = {
	Query: {
		users: async () => {
			try {
				return User.find().sort({ createdAt: -1 });
			} catch (error) {
				console.log('TCL: error', error);
			}
		}
	},
	Mutation: {
		createUser: async (_, { input }) => {
			console.log('TCL: input', input);
			try {
				const response = await User.create({
					...input,
					createdAt: new Date().toISOString()
				});
				console.log('TCL: response', response);
				return response;
			} catch (error) {
				console.log('TCL: error', error.message);
			}
		}
	}
};
