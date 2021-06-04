import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";

const server: GraphQLServer = new GraphQLServer({ schema });

server.express.use(cors());
server.express.use(
  helmet({ contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false })
);
server.express.use(logger("dev"));

export default server;
