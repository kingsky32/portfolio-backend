import Projects from '../../entities/Projects.entities';
import { ProjectMutationProps, ProjectPayloadProps } from '../../types/projects';

export default {
  Mutation: {
    CreateProject: async (_, args: ProjectMutationProps): Promise<ProjectPayloadProps> => {
      try {
        const data = await Projects.create(args).save();
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
