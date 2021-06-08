import uniqid from 'uniqid';
import { uploadS3 } from '../../../utils/s3Uploader';
import File from '../entities/File.entities';

export default {
  Mutation: {
    SingleUpload: async (_, { file }) => {
      try {
        const { createReadStream, filename, mimetype } = await file;
        const fileStream = createReadStream();
        const key = uniqid();
        const data = await uploadS3({
          Body: fileStream,
          Key: key,
          ContentType: mimetype,
        });
        await File.create({
          url: data.Location,
          filename,
          mimetype,
        }).save();
      } catch (error) {
        throw error;
      }
    },
  },
};
