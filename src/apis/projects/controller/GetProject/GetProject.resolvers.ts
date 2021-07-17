import Projects from '../../entities/Projects.entities';
import { ProjectPayloadProps } from './../../types/projects.d';

export default {
  Query: {
    GetProject: async (_, args: { id: number }): Promise<ProjectPayloadProps> => {
      try {
        const { id } = args;
        const data = await Projects.findOne({ id });
        if (!data) throw new Error('Not Found');
        return {
          project: data,
          error: null,
        };
      } catch (error) {
        return {
          project: null,
          error,
        };
      }
    },
  },
};
