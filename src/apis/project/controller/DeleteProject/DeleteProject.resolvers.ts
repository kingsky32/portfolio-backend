import Project from '../../entities/Project.entities';

export default {
  Mutation: {
    DeleteProject: async (_, body) => {
      try {
        const { id } = body;
        await Project.delete({ id });
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};
