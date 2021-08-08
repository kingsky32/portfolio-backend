import { CodeProps } from './../../types/codes.d';
import Codes from '../../entities/Code.entities';

export default {
  Mutation: {
    DeleteCode: async (_, args: { code: string }): Promise<CodeProps> => {
      try {
        const { code } = args;
        const data = await Codes.delete({ code });
        return data.raw;
      } catch (error) {
        throw error;
      }
    },
  },
};
