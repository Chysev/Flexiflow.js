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
import Routes from "./routes";

// PAGES
FlexiPageRouter(Routes.pages, router);

// STATICS
FlexiStaticRouter(Routes.static, router, express);

// API
FlexiApiRouter(Routes.api, router);

export default router;
