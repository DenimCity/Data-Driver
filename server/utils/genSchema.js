import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import * as path from 'path';
import * as glob from 'glob';
import * as fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';

export const genSchema = () => {
	const pathToModules = path.join(__dirname, '../graphql');
	const graphqlTypes = glob
		.sync(`${pathToModules}/**/*.graphql`)
		.map((x) => fs.readFileSync(x, { encoding: 'utf8' }));

	const resolvers = glob.sync(`${pathToModules}/**/resolvers.js`).map((resolver) => require(resolver).resolvers);

	return makeExecutableSchema({
		typeDefs: mergeTypes(graphqlTypes),
		resolvers: mergeResolvers(resolvers)
	});
};
