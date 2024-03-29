import 'dotenv/config';

import { ApolloServer } from 'apollo-server';
import startDBConnection from './server/database';
import { genSchema, logger } from './server/utils';
import { DB } from './server/entities';

const PORT = process.env.PORT || 7000;

const server = new ApolloServer({
	cors: true,
	schema: genSchema(),
	context: ({ req, res }) => ({
		cors: true,
		DB,
		req,
		res
	})
});

server.listen(PORT, async () => {
	await startDBConnection();
	logger.info(`🚀 Graphql Server API Running On Port: ${PORT}`);
});
