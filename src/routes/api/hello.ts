import express, { Request, Response, Express } from "express";
const api: Express = express();

// JSON DATA
import datas from "./[datas]";

// ENDPOINT
api.get("/", (req: Request, res: Response) => {
  // API
  const formattedData: String = JSON.stringify(datas, null, 2);
  res.set("Content-Type", "application/json");
  res.status(200).send(formattedData);
});

export default api;
