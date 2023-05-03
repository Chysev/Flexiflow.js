import express, { Request, Response, Express } from "express";
const router: Express = express();

import React from "react";
import ReactDOMServer from "react-dom/server";

// Routes Path
import Home from "../pages/app";
import About from "../pages/about";

export { Home, About };

// Render
router.get("/", (req: Request, res: Response) => {
  const html = ReactDOMServer.renderToString(React.createElement(Home));
  res.render("index", { html });
});

router.get("/about", (req: Request, res: Response) => {
  const html = ReactDOMServer.renderToString(React.createElement(About));
  res.render("index", { html });
});

export default router;
