import { join } from "path";
import { addResolversToSchema } from "@graphql-tools/schema";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLSchema } from "graphql";
import { IResolvers } from "@graphql-tools/utils";

const schema = loadSchemaSync(join(__dirname, "./apis/**/*.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const allResolvers: Array<any> = loadFilesSync(join(__dirname, "./apis/**/*.resolvers.*"));
const mergedResolvers: IResolvers = mergeResolvers(allResolvers);

const schemaWithResolvers: GraphQLSchema = addResolversToSchema({
  schema,
  resolvers: mergedResolvers,
});

export default schemaWithResolvers;
