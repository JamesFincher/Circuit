/* AWS S3 config options */
/* Highly recommended to declare the config object in an external file import it when needed */

/* s3Config.ts */

export const s3Config = {
  bucketName: process.env.BUCKET_NAME,
  dirName: "directory-name" /* Optional */,
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  s3Url: process.env.S3_URL /* Optional */,
};

/* End of s3Config.ts */
