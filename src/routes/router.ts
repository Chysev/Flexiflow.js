import express, { Request, Response, Express } from "express";
const router: Express = express();
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

router.use(express.urlencoded({ extended: false }));

// ROUTES
import Routes from "./routes";

for (const [key, PageComponent] of Object.entries(Routes.pages)) {
  const route = "Home" ? "/" : `/${key.toLowerCase()}`;
  router.get(route, (req: Request, res: Response) => {
    const html = ReactDOMServer.renderToString(
      React.createElement(PageComponent)
    );
    res.render("index.ejs", { html });
  });
}

// API
router.use("/api/hello", Routes.api.Hello);

// CSS
router.use("/css", express.static(path.join(__dirname, Routes.static.css)));

// PUBLIC
router.use(
  "/public",
  express.static(path.join(__dirname, Routes.static.public))
);

export default router;
