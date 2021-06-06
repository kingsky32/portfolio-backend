import Project from '../../entities/Project.entities';

export default {
  Query: {
    GetProject: async (_, body) => {
      try {
        const { id } = body;
        const data = await Project.findOne({ id });
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
