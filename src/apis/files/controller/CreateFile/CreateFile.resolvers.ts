import uniqid from 'uniqid';
import { uploadS3 } from '../../../../utils/s3Uploader';
import Files from '../../entities/Files.entities';
import { FileProps } from '../../types/files';

export default {
  Mutation: {
    CreateFile: async (_, { file }): Promise<FileProps> => {
      try {
        const { createReadStream, filename, mimetype } = await file;
        const fileStream = createReadStream();
        const key = uniqid();
        const s3 = await uploadS3({
          Body: fileStream,
          Key: key,
          ContentType: mimetype,
        });
        const data = await Files.create({
          url: s3.Location,
          filename,
          mimetype,
        }).save();
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};
