import Files from '../../entities/Files.entities';
import { FilePayload } from '../../types/files';

export default {
  Query: {
    GetFile: async (_, args: { id: number }): Promise<FilePayload> => {
      try {
        const { id } = args;
        const data = await Files.findOne({ id });
        if (!data) throw { status: 404, message: 'Not Found' };
        return {
          file: data,
          error: null,
        };
      } catch (error) {
        return {
          file: null,
          error,
        };
      }
    },
  },
};
