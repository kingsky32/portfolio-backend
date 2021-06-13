import File from '../../entities/File.entities';

export default {
  Query: {
    GetFile: async (_, args) => {
      try {
        const data = await File.findOne({ id: args.id });
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
