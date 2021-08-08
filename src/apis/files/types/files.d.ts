export interface FileProps {
  id: number;
  url: string;
  filename: string;
  mimetype: string;
  createdAt: Date;
}

export interface FileMutationProps extends Omit<FileProps, 'id' | 'createdAt'> {}
