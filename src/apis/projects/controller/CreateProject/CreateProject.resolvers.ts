import { ProjectProps } from './../../types/projects.d';
import Projects from '../../entities/Projects.entities';
import { ProjectMutationProps } from '../../types/projects';

export default {
  Mutation: {
    CreateProject: async (_, args: ProjectMutationProps): Promise<ProjectProps> => {
      try {
        const data = await Projects.create(args).save();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
