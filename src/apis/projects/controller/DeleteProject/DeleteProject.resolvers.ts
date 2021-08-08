import Projects from '../../entities/Projects.entities';
import { ProjectProps } from '../../types/projects';

export default {
  Mutation: {
    DeleteProject: async (_, args: { id: number }): Promise<ProjectProps> => {
      try {
        const { id } = args;
        const data = await Projects.delete({ id });
        return data.raw;
      } catch (error) {
        throw error;
      }
    },
  },
};
