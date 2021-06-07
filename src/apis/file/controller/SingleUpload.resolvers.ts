export default {
  Mutation: {
    SingleUpload: async (_, body) => {
      try {
        console.log(body);
      } catch (error) {
        throw error;
      }
    },
  },
};
