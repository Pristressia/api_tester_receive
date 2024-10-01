import path from "path";
import fs from "fs";
import { uploadFileDir } from "../constant/file.const";

import fileUpload from "express-fileupload";
import GlobalLog from "../class/GlobalLog.class";

const uploadLog = new GlobalLog("uploadFile log");

export default function uploadFileHandle(
  file_received: fileUpload.UploadedFile
) {
  const uploadPath = path.join(uploadFileDir, file_received.name);

  file_received.mv(uploadPath, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
}
