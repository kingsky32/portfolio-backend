import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  region: process.env.AWS_S3_REGION,
});

export const uploadS3 = async (fileStream, imageKey, itemId, url) => {
  const params: AWS.S3.Types.PutObjectRequest = {
    Bucket: `${process.env.AWS_S3_BUCKET}`,
    Key: `${imageKey}/${itemId}/${url}`,
    Body: fileStream,
    ACL: 'public-read',
    ContentType: 'image/jpg',
  };

  try {
    const response = await s3.upload(params).promise();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
