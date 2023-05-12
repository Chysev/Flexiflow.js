import express, { Express } from "express";
const server: Express = express();
import flexiserver from "flexiflow/FlexiServer";

// ROUTER
import router from "./routes/coreRouter";

// DEFAULTS
server.use(router);
server.use(express.urlencoded({ extended: false }));

// BABEL
import register from "@babel/register";
import babelConfig from "../babel.config.js";

register({
  extensions: [".jsx", ".js", ".ts", ".tsx"],
});

register(babelConfig);

// SERVER
flexiserver(server);
