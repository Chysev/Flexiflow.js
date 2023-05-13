import {
  FlexiPageRouter,
  FlexiStaticRouter,
  FlexiApiRouter,
} from "flexiflow/FlexiRouter";
import express, { Express } from "express";
const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.set("views", "template");

// ROUTES
import routes from "./routes";

// PAGES
FlexiPageRouter("pages", router);

// STATICS
FlexiStaticRouter(routes.static, router, express);

// API
FlexiApiRouter("api", router);

export default router;
