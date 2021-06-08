import Project from '../../entities/Project.entities';

export default {
  Mutation: {
    DeleteProject: async (_, args) => {
      try {
        const { id } = args;
        await Project.delete({ id });
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};
