import React, { memo, Suspense } from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import routes from "../feature/routes/index";

function GetRoutes() {
  return (
    <div className="w-full h-full px-10">
      <Suspense
        fallback={
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        }
      >
        k
        <Switch>
          {routes.map((route, indx) => {
            return <ProtectedRoute key={route.path} {...route} />;
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default memo(GetRoutes);
