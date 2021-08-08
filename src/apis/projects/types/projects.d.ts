import { CodeProps } from './../../codes/types/codes.d';
export enum ProjectPlatformType {
  'web',
  'app',
}

export enum ProjectTypeTypes {
  'develop',
  'design',
}

export interface ProjectProps {
  id: number;
  accountId: number;
  type?: ProjectTypeTypes;
  platform?: ProjectPlatformType;
  title?: string;
  description?: string;
  meta?: string;
  thumbnail?: number;
  github?: string;
  page?: string;
  tools?: CodeProps[];
  startAt?: Date;
  endAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectMutationProps
  extends Omit<ProjectProps, 'id' | 'accountId' | 'createdAt' | 'updatedAt'> {}
