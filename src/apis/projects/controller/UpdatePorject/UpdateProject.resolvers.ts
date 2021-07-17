import Projects from '../../entities/Projects.entities';
import { ProjectPayloadProps } from '../../types/projects';

export default {
  Mutation: {
    UpdateProject: async (_, args: { id: number }): Promise<ProjectPayloadProps> => {
      try {
        const { id } = args;
        const data = await Projects.update({ id }, args);
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
