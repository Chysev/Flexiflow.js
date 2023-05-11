import express, { Express } from "express";
const server: Express = express();

// ROUTER
import router from "./routes/coreRouter";

// DEFAULTS
console.log(__dirname);
server.set("view engine", "ejs");
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
import http from "http";
import reload from "reload";
const httpserver = http.createServer(server);

reload(server)
  .then(() => {
    httpserver.listen(server.listen(3000), function () {
      console.log("Flexiflow - http://localhost:3000 | http://0.0.0.0:3000");
    });
  })
  .catch(function (error) {
    console.error("Could not reload", error);
  });
