export interface CodeProps {
  code: string;
  label: string;
}

export interface CodeMutationProps extends CodeProps {}

export interface CodesPayloadProps {
  codes: CodeProps[] | null | undefined;
  error: string | null | undefined;
}

export interface CodePayloadProps {
  code: CodeProps | null | undefined;
  error: string | null | undefined;
}
