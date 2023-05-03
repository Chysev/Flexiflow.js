import express, { Request, Response } from "express";
const helper = express();
import path from "path";

helper.get("/css/index.css", (req: Request, res: Response) => {
  const filePath = path.resolve(__dirname, "../css/index.css");
  res.sendFile(filePath);
});

export default helper;
