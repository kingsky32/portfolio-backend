import Project from '../../entities/Project.entities';
import { CreateProjectMutationProps } from '../../types/project';

export default {
  Mutation: {
    CreateProject: async (_, body: CreateProjectMutationProps) => {
      try {
        const data = await Project.create(body).save();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
