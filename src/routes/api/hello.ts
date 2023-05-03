import express, { Request, Response } from "express";
const api = express();

// JSON
const datas: typings[] = [
  {
    FirstName: "John",
    LastName: "Doe",
    Age: 20,
    Country: "US",
    Language: "English",
  },
];

// ENDPOINT
api.get("/api/hello", (req: Request, res: Response) => {
  // API
  const formattedData: String = JSON.stringify(datas, null, 2);
  res.set("Content-Type", "application/json");
  res.status(200).send(formattedData);
});

export default api;
