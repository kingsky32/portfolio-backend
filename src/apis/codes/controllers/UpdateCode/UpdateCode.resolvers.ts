import Codes from '../../entities/Codes.entities';
import { CodeMutationProps, CodeProps } from '../../types/codes';

export default {
  Mutation: {
    UpdateCode: async (_, args: CodeMutationProps): Promise<CodeProps> => {
      try {
        const { code } = args;
        const data = await Codes.update({ code }, args);
        return data.raw;
      } catch (error) {
        throw error;
      }
    },
  },
};
