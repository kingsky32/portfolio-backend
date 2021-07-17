import Codes from '../../entities/Code.entities';
import { CodeMutationProps, CodePayloadProps } from '../../types/codes';

export default {
  Mutation: {
    CreateCode: async (_, args: CodeMutationProps): Promise<CodePayloadProps> => {
      try {
        const data = await Codes.create(args).save();
        return {
          code: data,
          error: null,
        };
      } catch (error) {
        return {
          code: null,
          error,
        };
      }
    },
  },
};
