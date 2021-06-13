import Project from '../../entities/Project.entities';

export default {
  Query: {
    GetProjects: async (_, args) => {
      const { maxResults } = args;
      try {
        const data = await Project.find({
          take: maxResults,
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
