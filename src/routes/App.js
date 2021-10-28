import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRouter from "./privateRoute";
//container
/* import Layout from '../components/Layout.jsx'; */
import Login from "../components/login";
import SignUp from "../components/signUp";
import ListRepositories from "../components/listRepositories";
import ListFavorites from "../components/listFavorites";
//styles globals

/* const store = createStore(reducer, initialState) */

const App = () => {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <PrivateRouter
          exact
          path="/listRepositories"
          component={ListRepositories}
        ></PrivateRouter>
        <PrivateRouter
          exact
          path="/listFavorites"
          component={ListFavorites}
        ></PrivateRouter>
        <Route exact path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
};

export default App;
