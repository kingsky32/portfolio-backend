import Project from '../../entities/Project.entities';
import { ProjectMutationProps } from '../../types/project';

export default {
  Mutation: {
    CreateProject: async (_, body: ProjectMutationProps) => {
      try {
        const data = await Project.create(body).save();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
