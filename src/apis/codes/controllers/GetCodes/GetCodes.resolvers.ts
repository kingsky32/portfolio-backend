import Codes from '../../entities/Code.entities';
import { CodesPayloadProps } from '../../types/codes.d';

export default {
  Query: {
    GetCodes: async (): Promise<CodesPayloadProps> => {
      try {
        const data = await Codes.find();
        return { codes: data, error: null };
      } catch (error) {
        return { codes: [], error };
      }
    },
  },
};
