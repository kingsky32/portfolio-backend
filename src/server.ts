import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";

const server = new GraphQLServer({ schema });

server.express.use(cors());
server.express.use(helmet());
server.express.use(logger("dev"));

export default server;
