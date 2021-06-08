import Project from '../../entities/Project.entities';
import { ProjectMutationProps } from '../../types/project';

export default {
  Mutation: {
    CreateProject: async (_, args: ProjectMutationProps) => {
      try {
        const data = await Project.create(args).save();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
