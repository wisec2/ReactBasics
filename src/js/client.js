import React from "react";
import ReactDOM from "react-dom";

// import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={Router.browserHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>, 
app);
