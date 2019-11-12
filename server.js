import 'dotenv/config';

import { ApolloServer, gql } from 'apollo-server';
import startDBConnection from './server/database';
import { genSchema, logger } from './server/utils';

const PORT = process.env.PORT || 7000;

const server = new ApolloServer({
	cors: true,
	schema: genSchema(),
	context: ({ req, res }) => ({
		cors: true,
		OP: Sequelize.Op,
		models: db,
		req,
		res
	}),
	formatError: (error) => {
		return {
			...error,
			message: error.message.replace('SequelizeValidationError: ', '').replace('Validation error: ', '')
		};
	}
});

server.listen(PORT, async () => {
	await startDBConnection();
	logger.info(`🚀 Graphql Server API Running On Port: ${PORT}`);
});
