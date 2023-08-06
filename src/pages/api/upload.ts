import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { MulterFile, uploadToGCS } from '@/libs/uploadToGCS';

interface NextApiRequestMulter extends NextApiRequest {
  files: MulterFile[];
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async function handler(
  req: NextApiRequestMulter,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send('ASD');
  }

  const multerStorage = multer.memoryStorage();
  const multipleUpload = multer({
    storage: multerStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  }).array('file');

  multipleUpload(req as any, res as any, async () => {
    try {
      const imageUrlsPromises = req.files.map((file) => uploadToGCS(file));

      const imageUrls = await Promise.all(imageUrlsPromises);

      return res.status(200).json(imageUrls);
    } catch (error) {
      console.error(error);
      return res.status(400).send('ASD');
    }
  });
}
