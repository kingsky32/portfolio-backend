export const typeDefs = ["type CreateCodePayload {\n  code: Code\n  error: String\n}\n\ntype Mutation {\n  CreateCode(code: String!, label: String!): CreateCodePayload!\n  DeleteCode(code: String!): DeleteCodePayload!\n  UpdateCode(code: String!, label: String!): UpdateCodePayload!\n  CreateFile(file: Upload!): CreateFilePayload!\n  SendMail(from: String!, to: String!, subject: String, text: String): SendMailPayload!\n  CreateProject(type: String, platform: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): CreateProjectPayload\n  DeleteProject(id: Int!): DeleteProjectPayload!\n  UpdateProject(id: Int!, type: String, platform: String, title: String, thumbnail: Int, github: String, page: String, tools: [String], startAt: Date, endAt: Date): UpdateProjectsPayload!\n}\n\ntype DeleteCodePayload {\n  code: Code\n  error: String\n}\n\ntype GetCodesPayload {\n  codes: [Code]!\n  error: String\n}\n\ntype Query {\n  GetCodes: GetCodesPayload\n  GetFile(id: Int!): GetFilePayload!\n  GetProject(id: Int!): GetProjectPayload\n  GetProjects: GetProjectsPayload!\n}\n\ntype UpdateCodePayload {\n  code: Code\n  error: String\n}\n\ntype Code {\n  code: String!\n  label: String!\n}\n\nscalar Upload\n\ntype CreateFilePayload {\n  file: File\n  error: String\n}\n\ntype GetFilePayload {\n  file: File\n  error: String\n}\n\ntype File {\n  id: Int!\n  url: String!\n  filename: String!\n  mimetype: String!\n  createdAt: Date\n}\n\ntype SendMailPayload {\n  result: Boolean\n  error: String\n}\n\ntype CreateProjectPayload {\n  project: Project\n  error: String\n}\n\ntype DeleteProjectPayload {\n  project: Project\n  error: String\n}\n\ntype GetProjectPayload {\n  project: Project\n  error: String\n}\n\ntype GetProjectsPayload {\n  projects: [Project]!\n  error: String\n}\n\ntype UpdateProjectsPayload {\n  project: Project\n  error: String\n}\n\nscalar Date\n\ntype Project {\n  id: Int\n  accountId: Int\n  type: String\n  platform: String\n  title: String\n  caption: String\n  meta: String\n  thumbnail: Int\n  github: String\n  page: String\n  tools: [String]\n  startAt: Date\n  endAt: Date\n  createdAt: Date\n  updatedAt: Date\n}\n"];
/* tslint:disable */

export interface Query {
  GetCodes: GetCodesPayload | null;
  GetFile: GetFilePayload;
  GetProject: GetProjectPayload | null;
  GetProjects: GetProjectsPayload;
}

export interface GetFileQueryArgs {
  id: number;
}

export interface GetProjectQueryArgs {
  id: number;
}

export interface GetCodesPayload {
  codes: Array<Code>;
  error: string | null;
}

export interface Code {
  code: string;
  label: string;
}

export interface GetFilePayload {
  file: File | null;
  error: string | null;
}

export interface File {
  id: number;
  url: string;
  filename: string;
  mimetype: string;
  createdAt: Date | null;
}

export type Date = any;

export interface GetProjectPayload {
  project: Project | null;
  error: string | null;
}

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

export interface GetProjectsPayload {
  projects: Array<Project>;
  error: string | null;
}

export interface Mutation {
  CreateCode: CreateCodePayload;
  DeleteCode: DeleteCodePayload;
  UpdateCode: UpdateCodePayload;
  CreateFile: CreateFilePayload;
  SendMail: SendMailPayload;
  CreateProject: CreateProjectPayload | null;
  DeleteProject: DeleteProjectPayload;
  UpdateProject: UpdateProjectsPayload;
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

export interface CreateCodePayload {
  code: Code | null;
  error: string | null;
}

export interface DeleteCodePayload {
  code: Code | null;
  error: string | null;
}

export interface UpdateCodePayload {
  code: Code | null;
  error: string | null;
}

export type Upload = any;

export interface CreateFilePayload {
  file: File | null;
  error: string | null;
}

export interface SendMailPayload {
  result: boolean | null;
  error: string | null;
}

export interface CreateProjectPayload {
  project: Project | null;
  error: string | null;
}

export interface DeleteProjectPayload {
  project: Project | null;
  error: string | null;
}

export interface UpdateProjectsPayload {
  project: Project | null;
  error: string | null;
}
