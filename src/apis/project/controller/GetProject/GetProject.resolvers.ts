import Project from '../../entities/Project.entities';

export default {
  Query: {
    GetProject: async (_, args) => {
      try {
        const { id } = args;
        const data = await Project.findOne({ id });
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
