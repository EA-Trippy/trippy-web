import { Storage } from '@google-cloud/storage';
import { v4 } from 'uuid';

export interface MulterFile {
  fieldname: String;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

export const uploadToGCS = (file: MulterFile) => {
  const { buffer, mimetype } = file;

  // Google Cloud Storage
  const storage = new Storage();
  const bucketName = 'trippy_image';
  const bucket = storage.bucket(bucketName);

  const filename = `${Date.now()}_${v4()}`;
  const blob = bucket.file(filename);
  const stream = blob.createWriteStream({
    metadata: {
      contentType: mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    stream.on('error', (error) => {
      reject(error); // Fail
    });

    stream.on('finish', () => {
      resolve(`https://storage.googleapis.com/${bucket.name}/${blob.name}`); // Success
    });

    stream.end(buffer);
  });
};
