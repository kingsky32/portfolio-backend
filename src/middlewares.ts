import { Context } from "graphql-yoga/dist/types";

export const isAuthenticated = (request: Context) => {
  if (!request.user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};
