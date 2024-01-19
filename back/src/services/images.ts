import multer, { StorageEngine } from "multer";
import { v4 as uuidv4 } from "uuid";

class ImageService {
  // stocker les images
  getStorage(): StorageEngine {
    return multer.diskStorage({
      destination: "uploads/",
      filename: (
        _req: Express.Request,
        file: Express.Multer.File,
        cb: (error: Error | null, filename: string) => void
      ) => {
        const filename = uuidv4() + "." + file.originalname.split(".").pop();
        cb(null, filename);
      },
    });
  }
}

export default ImageService;
