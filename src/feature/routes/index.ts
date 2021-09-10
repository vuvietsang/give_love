import { lazy } from "react";
import { RouteConfig } from "../../interfaces/routeConfig";
const Login = lazy(() => import("../login"));

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
];
export default routes;
