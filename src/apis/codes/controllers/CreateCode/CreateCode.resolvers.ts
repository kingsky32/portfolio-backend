import Codes from '../../entities/Codes.entities';
import { CodeMutationProps, CodeProps } from '../../types/codes';

export default {
  Mutation: {
    CreateCode: async (_, args: CodeMutationProps): Promise<CodeProps> => {
      try {
        const data = await Codes.create(args).save();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
