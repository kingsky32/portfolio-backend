export const typeDefs = ["type Mutation {\n  SendMail(from: String!, to: String!, subject: String!, text: String!): Boolean!\n  CreateProject(type: String, platform: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): Project\n  DeleteProject(id: Int!): Boolean\n  UpdateProject(id: Int!, type: String, platform: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): Boolean!\n}\n\ntype Query {\n  GetProject(id: Int!): Project\n  GetProjects: [Project]\n}\n\nscalar Date\n\ntype Project {\n  id: Int\n  accountId: Int\n  type: String\n  platform: String\n  title: String\n  thumbnail: Int\n  github: String\n  page: String\n  tools: [String]\n  startAt: Date\n  endAt: Date\n  createdAt: Date\n  updatedAt: Date\n}\n"];
/* tslint:disable */

export interface Query {
  GetProject: Project | null;
  GetProjects: Array<Project> | null;
}

export interface GetProjectQueryArgs {
  id: number;
}

export interface Project {
  id: number | null;
  accountId: number | null;
  type: string | null;
  platform: string | null;
  title: string | null;
  thumbnail: number | null;
  github: string | null;
  page: string | null;
  tools: Array<string> | null;
  startAt: Date | null;
  endAt: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export type Date = any;

export interface Mutation {
  SendMail: boolean;
  CreateProject: Project | null;
  DeleteProject: boolean | null;
  UpdateProject: boolean;
}

export interface SendMailMutationArgs {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export interface CreateProjectMutationArgs {
  type: string | null;
  platform: string | null;
  title: string | null;
  thumbnail: number | null;
  github: string | null;
  page: string | null;
  tools: Array<string> | null;
  startAt: Date | null;
  endAt: Date | null;
}

export interface DeleteProjectMutationArgs {
  id: number;
}

export interface UpdateProjectMutationArgs {
  id: number;
  type: string | null;
  platform: string | null;
  title: string | null;
  thumbnail: number | null;
  github: string | null;
  page: string | null;
  tools: Array<string> | null;
  startAt: Date | null;
  endAt: Date | null;
}
