import Projects from '../../entities/Projects.entities';
import { ProjectProps } from './../../types/projects.d';

export default {
  Query: {
    GetProject: async (_, args: { id: number }): Promise<ProjectProps> => {
      try {
        const { id } = args;
        const data = await Projects.findOne({ id });
        if (!data) throw new Error('Not Found');
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
