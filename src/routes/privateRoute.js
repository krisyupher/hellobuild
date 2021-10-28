import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const stateUser = useSelector((state) => state.stateUser);
  return (
    <Route {...rest}>
      {stateUser ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};
export default PrivateRoute;
