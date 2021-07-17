import Projects from '../../entities/Projects.entities';
import { ProjectsPayloadProps } from '../../types/projects.d';

export default {
  Query: {
    GetProjects: async (): Promise<ProjectsPayloadProps> => {
      try {
        const data = await Projects.find();
        return {
          projects: data,
          error: null,
        };
      } catch (error) {
        return {
          projects: null,
          error,
        };
      }
    },
  },
};
