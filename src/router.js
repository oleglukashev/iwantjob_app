import React from "react";
import { Router, Route } from "react-router";
import { history } from "./store.js";
import App from "./components/App";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

// export
export { router };
