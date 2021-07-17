import Codes from '../../entities/Code.entities';
import { CodeMutationProps, CodePayloadProps } from '../../types/codes';

export default {
  Mutation: {
    UpdateCode: async (_, args: CodeMutationProps): Promise<CodePayloadProps> => {
      try {
        const { code } = args;
        const data = await Codes.update({ code }, args);
        return { code: data.raw, error: null };
      } catch (error) {
        return { code: null, error };
      }
    },
  },
};
