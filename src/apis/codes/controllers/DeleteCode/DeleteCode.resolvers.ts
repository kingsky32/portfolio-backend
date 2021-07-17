import Codes from '../../entities/Code.entities';
import { CodePayloadProps } from '../../types/codes';

export default {
  Mutation: {
    DeleteCode: async (_, args: { code: string }): Promise<CodePayloadProps> => {
      try {
        const { code } = args;
        const data = await Codes.delete({ code });
        return { code: data.raw, error: null };
      } catch (error) {
        return { code: null, error };
      }
    },
  },
};
