import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import "./env";
import connectionOptions from "./ormConfig";
import server from "./server";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const handleAppStat = () =>
  console.log(
    `✅ Server running on http://localhost:${PORT} Go to Playground http://localhost:${PORT}/playground`
  );

createConnection(connectionOptions)
  .then(() => {
    server.start(appOptions, handleAppStat);
  })
  .catch((error) => console.log(error));
