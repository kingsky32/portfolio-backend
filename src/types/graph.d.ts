export const typeDefs = ["scalar Upload\n\ntype Mutation {\n  CreateFile(file: Upload!): File\n  SendMail(from: String!, to: String!, subject: String, text: String): Boolean!\n  CreateProject(type: String, platform: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): Project\n  DeleteProject(id: Int!): Boolean!\n  UpdateProject(id: Int!, type: String, platform: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): Boolean!\n}\n\ntype Query {\n  GetFile(id: Int!): File\n  GetProject(id: Int!): Project\n  GetProjects(maxResults: Int): [Project]\n}\n\ntype File {\n  id: Int!\n  url: String!\n  filename: String!\n  mimetype: String!\n  createdAt: Date\n}\n\nscalar Date\n\ntype Project {\n  id: Int\n  accountId: Int\n  type: String\n  platform: String\n  title: String\n  caption: String\n  meta: String\n  thumbnail: Int\n  github: String\n  page: String\n  tools: [String]\n  startAt: Date\n  endAt: Date\n  createdAt: Date\n  updatedAt: Date\n}\n"];
/* tslint:disable */

export interface Query {
  GetFile: File | null;
  GetProject: Project | null;
  GetProjects: Array<Project> | null;
}

export interface GetFileQueryArgs {
  id: number;
}

export interface GetProjectQueryArgs {
  id: number;
}

export interface GetProjectsQueryArgs {
  maxResults: number | null;
}

export interface File {
  id: number;
  url: string;
  filename: string;
  mimetype: string;
  createdAt: Date | null;
}

export type Date = any;

export interface Project {
  id: number | null;
  accountId: number | null;
  type: string | null;
  platform: string | null;
  title: string | null;
  caption: string | null;
  meta: string | null;
  thumbnail: number | null;
  github: string | null;
  page: string | null;
  tools: Array<string> | null;
  startAt: Date | null;
  endAt: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface Mutation {
  CreateFile: File | null;
  SendMail: boolean;
  CreateProject: Project | null;
  DeleteProject: boolean;
  UpdateProject: boolean;
}

export interface CreateFileMutationArgs {
  file: Upload;
}

export interface SendMailMutationArgs {
  from: string;
  to: string;
  subject: string | null;
  text: string | null;
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

export type Upload = any;
