import Project from '../../entities/Project.entities';
import { ProjectProps } from '../../types/project';

export default {
  Mutation: {
    UpdateProject: async (_, args: ProjectProps) => {
      try {
        const { id } = args;
        await Project.update({ id }, args);
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};
