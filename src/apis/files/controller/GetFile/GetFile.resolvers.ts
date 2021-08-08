import Files from '../../entities/Files.entities';
import { FileProps } from '../../types/files';

export default {
  Query: {
    GetFile: async (_, args: { id: number }): Promise<FileProps> => {
      try {
        const { id } = args;
        const data = await Files.findOne({ id });
        if (!data) throw { status: 404, message: 'Not Found' };
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
