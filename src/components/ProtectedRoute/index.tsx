import React, { memo } from "react";
import { shallowEqual } from "react-redux";
import { Redirect, Route } from "react-router";
import { RouteProps } from "react-router-dom";

export interface RouteConfig extends Omit<RouteProps, "render"> {
  isPrivate?: boolean;
  accessRole?: any[];
  component: React.ComponentType<any>;
}
const ProtectedRoute = ({
  path,
  component: Component,
  exact,
  isPrivate,
  accessRole,
  ...rest
}: RouteConfig) => {
  // const auth = useAppSelector((state) => state.auth?.isAuth, shallowEqual);
  // const role = useSelector((state) => state.userStatus?.userInfo?.user?.role, shallowEqual);
  return (
    <Route
      render={(props) => {
        if (!isPrivate) return <Component {...props} />;
        // if (!auth) return <Redirect to="/" />;
        // if (!accessRole.includes(role)) return <Redirect to="/" />;
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
};

export default memo(ProtectedRoute);
