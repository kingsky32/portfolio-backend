import Project from '../../entities/Project.entities';

export default {
  Query: {
    GetProjects: async () => {
      try {
        const data = await Project.find();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
