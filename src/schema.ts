import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import { addResolversToSchema } from '@graphql-tools/schema';
import { IResolvers } from '@graphql-tools/utils';
import { GraphQLSchema } from 'graphql';
import { join } from 'path';

const schema: GraphQLSchema = loadSchemaSync(join(__dirname, './apis/**/*.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const allResolvers: any[] = loadFilesSync(join(__dirname, './apis/**/*.resolvers.*'));
const mergedResolvers: IResolvers = mergeResolvers(allResolvers);

const schemaWithResolvers: GraphQLSchema = addResolversToSchema({
  schema,
  resolvers: mergedResolvers,
});

export default schemaWithResolvers;
