import Project from '../../entities/Project.entities';
import { ProjectProps } from '../../types/project';

export default {
  Mutation: {
    UpdateProject: async (_, body: ProjectProps) => {
      try {
        const { id } = body;
        await Project.update({ id }, body);
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
};
