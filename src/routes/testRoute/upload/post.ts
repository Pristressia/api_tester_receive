import { NextFunction, Request, Response } from "express";
import GlobalLog from "../../../class/GlobalLog.class";
import errorCatching from "../../../function/errorCatching";
import GL from "./log";
import fileUpload from "express-fileupload";
import uploadFileHandle from "../../../function/uploadFileHandle";

interface BodyReceive_forTestRoute_upload {
  testText?: string;
  [index: string]: any;
}

const POST = errorCatching(
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || !req.files.file) {
      throw new Error("No file have been upload");
    }

    // from body input name "file"
    const uploadedFile = req.files.file as fileUpload.UploadedFile;
    const testText_receive = (req.body as BodyReceive_forTestRoute_upload)
      ?.testText;

    uploadFileHandle(uploadedFile);

    GL.Log(`File Name: ${uploadedFile.name}`);
    GL.Log(`File Size: ${uploadedFile.size}`);
    GL.Log(`File MD5 Hash: ${uploadedFile.md5}`);
    GL.Log(`File Mime Type: ${uploadedFile.mimetype}`);

    res.status(200).json({
      status: "ok",
      message: `seem like you upload ${uploadedFile.name} completed !!!`,
      message2: `and I got testText message from you ${testText_receive}`,
    });
  },
  GL
);

export default POST;
