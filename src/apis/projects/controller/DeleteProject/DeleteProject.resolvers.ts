import Projects from '../../entities/Projects.entities';
import { ProjectPayloadProps } from '../../types/projects';

export default {
  Mutation: {
    DeleteProject: async (_, args: { id: number }): Promise<ProjectPayloadProps> => {
      try {
        const { id } = args;
        const data = await Projects.delete({ id });
        return {
          project: data.raw,
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
