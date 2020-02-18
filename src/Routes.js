import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Docinput from "./containers/Docinput";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AuthenticatedRoute path="/Docinput/new" exact component={Docinput} appProps={appProps} />
        <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
        <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
        <AppliedRoute path="/" exact component={Home} appProps={appProps} />
        <Route component={NotFound} />
      </Switch>
    );
  }