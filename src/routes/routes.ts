import Home from "../pages/app";
import About from "../pages/about";
import Hello from "./api/hello";

const Routes = {
  static: {
    css: "../../src/css",
    public: "../../public",
  },
  pages: {
    Home: Home,
    About: About,
  },
  api: {
    Hello: Hello,
  },
};

export default Routes;
