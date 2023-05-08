import express, { Request, Response, Express } from "express";
const router: Express = express();
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

router.use(express.urlencoded({ extended: false }));
router.set("views", "template");

// ROUTES
import Routes from "./routes";

// PAGES
for (const [key, PageComponent] of Object.entries(Routes.pages)) {
  const route = key.toLowerCase() === "home" ? "/" : `/${key.toLowerCase()}`;
  router.get(route, (req: Request, res: Response) => {
    const html = ReactDOMServer.renderToString(
      React.createElement(PageComponent)
    );
    res.render("index", { html });
  });
}

// STATICS
for (const [key, StaticComponent] of Object.entries(Routes.static)) {
  router.use(
    `/${key.toLowerCase()}`,
    express.static(path.join(__dirname, StaticComponent))
  );
}

// API
router.use("/api/hello", Routes.api.Hello);

export default router;
