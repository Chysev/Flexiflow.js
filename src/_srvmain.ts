import express, { Express } from "express";
const server: Express = express();

// middleware
import router from "./routes/router";
import api from "./routes/api/hello";
import helper from "./utilities/helpers";

// defaults
server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(express.static("css"));
server.use(helper, api, router);

// babel
import register from "@babel/register";

register({
  extensions: [".jsx", "js", ".mjs", ".es6", ".tsx", ".es6"],
});

// server
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
