import Projects from '../../entities/Projects.entities';
import { ProjectProps } from '../../types/projects';

export default {
  Query: {
    GetProjects: async (): Promise<ProjectProps[]> => {
      try {
        const data = await Projects.findAll();
        console.log(data);
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
