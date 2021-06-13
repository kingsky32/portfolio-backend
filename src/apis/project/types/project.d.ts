export enum ProjectPlatformType {
  'web',
  'app',
}

export enum ProjectTypeTypes {
  'develop',
  'design',
}

export enum ProjectToolTypes {
  'react',
  'react-native',
  'graphql',
  'prisma',
  'firebase',
  'styled-components',
}

export interface ProjectMutationProps {
  type?: ProjectTypeTypes;
  platform?: ProjectPlatformType;
  title?: string;
  caption?: string;
  meta?: string;
  thumbnail?: number;
  github?: string;
  page?: string;
  tools?: ProjectToolTypes[];
  startAt?: Date;
  endAt?: Date;
}

export interface ProjectProps extends ProjectMutationProps {
  id: number;
  accountId: number;
  createdAt: Date;
  updatedAt: Date;
}
