import AWS from 'aws-sdk';

interface UploadS3Props extends Omit<AWS.S3.Types.PutObjectRequest, 'Bucket'> {}

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  region: process.env.AWS_S3_REGION,
});

export const uploadS3 = (props: UploadS3Props): Promise<AWS.S3.ManagedUpload.SendData> => {
  const params = { Bucket: `${process.env.AWS_S3_BUCKET}`, ...props };
  return s3.upload(params).promise();
};
