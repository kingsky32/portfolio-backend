export interface FileProps {
  id: number;
  url: string;
  filename: string;
  mimetype: string;
  createdAt: Date;
}

export interface FileMutationProps extends Omit<FileProps, 'id' | 'createdAt'> {}

export interface FilePayload {
  file: FileProps | null | undefined;
  error: string | null | undefined;
}
