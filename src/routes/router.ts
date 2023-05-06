import express, { Request, Response, Express } from "express";
const router: Express = express();
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

router.use(express.urlencoded({ extended: false }));

// ROUTES
import Home from "../pages/app";
import About from "../pages/about";
import api from "./api/hello";

export { Home, About };

// RENDERS
router.get("/", (req: Request, res: Response) => {
  const html = ReactDOMServer.renderToString(React.createElement(Home));
  res.render("index", { html });
});

router.get("/about", (req: Request, res: Response) => {
  const html = ReactDOMServer.renderToString(React.createElement(About));
  res.render("index", { html });
});

// API
router.use("/api/hello", api);

// CSS
router.use("/css", express.static(path.join(__dirname, "../../src/css")));

// PUBLIC
router.use("/public", express.static(path.join(__dirname, "../../public")));

export default router;
