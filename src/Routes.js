import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
export default function Routes() {
    return (
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    );
  }