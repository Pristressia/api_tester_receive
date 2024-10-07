import { Request, Response } from "express";
import log from "./log";
import fileUpload from "express-fileupload";

export default function POST_id(req: Request, res: Response) {
  try {
    // console.log(req.files);
    // console.log(req.body);
    // console.log(req.params);

    if (!req.files || !req.files.file) {
      throw new Error("file didn't upload of file not found ");
    }

    const uploadedFile: fileUpload.UploadedFile = req.files
      ?.file as fileUpload.UploadedFile;
    const idReceived = req.params.id;

    const fileName = uploadedFile.name;
    const fileSize = uploadedFile.size;
    log.Log(`id that found is : ${idReceived} `);
    log.Log(`fileName : ${fileName}, fileSize: ${fileSize}`, "log");

    res.status(200).json({
      status: 200,
      message: `fileName : ${fileName}, fileSize: ${fileSize}`,
      filename: fileName,
    });
  } catch (e) {
    const errorMessage = (e as Error).message;
    log.Log(`error happen : ${errorMessage}`, "error");
    res.status(400).json({
      status: 200,
      message: errorMessage,
      filename: null,
    });
  }
}
