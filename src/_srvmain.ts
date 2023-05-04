import express, { Express } from "express";
const server: Express = express();

// ROUTER
import router from "./routes/router";

// DEFAULTS
server.set("view engine", "ejs");
server.use(router);

// BABEL
import register from "@babel/register";

register({
  extensions: [".jsx", ".js", ".ts", ".tsx"],
});

// SERVER
import http from "http";
import reload from "reload";
const httpserver = http.createServer(server);

reload(server)
  .then(() => {
    httpserver.listen(server.listen(3000), function () {
      console.log("ExReact - http://localhost:3000 | http://0.0.0.0:3000");
    });
  })
  .catch(function (error) {
    console.error("Could not reload", error);
  });
