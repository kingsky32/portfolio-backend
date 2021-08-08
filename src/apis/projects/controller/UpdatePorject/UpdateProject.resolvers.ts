import Projects from '../../entities/Projects.entities';
import { ProjectProps } from '../../types/projects';

export default {
  Mutation: {
    UpdateProject: async (_, args: { id: number }): Promise<ProjectProps> => {
      try {
        const { id } = args;
        const data = await Projects.update({ id }, args);
        return data.raw;
      } catch (error) {
        throw error;
      }
    },
  },
};
