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

export interface CreateProjectMutationProps {
  type?: ProjectTypeTypes;
  platform?: ProjectPlatformType;
  title?: string;
  thumbnail?: number;
  github?: string;
  page?: string;
  tools?: ProjectToolTypes[];
  startAt?: Date;
  endAt?: Date;
}

export interface ProjectProps extends CreateProjectMutationProps {
  id: number;
  accountId: number;
  createdAt: Date;
  updatedAt: Date;
}
