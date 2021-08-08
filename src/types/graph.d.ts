export const typeDefs = ["type Mutation {\n  CreateCode(code: String!, label: String!): Code!\n  DeleteCode(code: String!): Code!\n  UpdateCode(code: String!, label: String!): Code!\n  CreateFile(file: Upload!): File!\n  SendMail(from: String!, to: String!, subject: String, text: String): Boolean!\n  CreateProject(type: String, platform: String, description: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): Project\n  DeleteProject(id: Int!): Project!\n  UpdateProject(id: Int!, type: String, platform: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): Project!\n}\n\ntype Query {\n  GetCodes: [Code]!\n  GetFile(id: Int!): File!\n  GetProject(id: Int!): Project!\n  GetProjects(maxResults: Int): [Project]!\n}\n\ntype Code {\n  code: String!\n  label: String!\n}\n\nscalar Upload\n\ntype File {\n  id: Int!\n  url: String!\n  filename: String!\n  mimetype: String!\n  createdAt: Date\n}\n\nscalar Date\n\ntype Project {\n  id: Int\n  accountId: Int\n  type: Code\n  platform: Code\n  title: String\n  description: String\n  meta: String\n  thumbnail: File\n  github: String\n  page: String\n  tools: [Code]\n  startAt: Date\n  endAt: Date\n  createdAt: Date\n  updatedAt: Date\n}\n"];
/* tslint:disable */

export interface Query {
  GetCodes: Array<Code>;
  GetFile: File;
  GetProject: Project;
  GetProjects: Array<Project>;
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

export interface Code {
  code: string;
  label: string;
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
  type: Code | null;
  platform: Code | null;
  title: string | null;
  description: string | null;
  meta: string | null;
  thumbnail: File | null;
  github: string | null;
  page: string | null;
  tools: Array<Code> | null;
  startAt: Date | null;
  endAt: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface Mutation {
  CreateCode: Code;
  DeleteCode: Code;
  UpdateCode: Code;
  CreateFile: File;
  SendMail: boolean;
  CreateProject: Project | null;
  DeleteProject: Project;
  UpdateProject: Project;
}

export interface CreateCodeMutationArgs {
  code: string;
  label: string;
}

export interface DeleteCodeMutationArgs {
  code: string;
}

export interface UpdateCodeMutationArgs {
  code: string;
  label: string;
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
  description: string | null;
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
