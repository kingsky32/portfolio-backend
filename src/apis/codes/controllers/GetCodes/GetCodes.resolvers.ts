import { CodeProps } from './../../types/codes.d';
import Codes from '../../entities/Codes.entities';

export default {
  Query: {
    GetCodes: async (): Promise<CodeProps[]> => {
      try {
        const data = await Codes.find();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
