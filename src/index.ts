import { Options } from "graphql-yoga";
import server from "./server";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const handleAppStat = () => console.log(`✅ Server running on http://localhost:${PORT}`);

server.start(appOptions, handleAppStat);
