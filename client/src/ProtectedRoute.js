import React from "react";
import { Route, Navigate  } from "react-router-dom";
import {user} from "./AuthService";

export const ProtectedRoute = ({
//   path,
  component: Component,
//   render,
  requiredRole,
  ...rest
}) => {

    if (user.role.name === requiredRole) {
        return  <Component  /> ;
      } else {
        return <Navigate  to="/error" />;
      }

 
};

export default ProtectedRoute;