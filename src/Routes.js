import React from "react";
import App from "./App";
import SignInSide from "./SignInSide";
import Add from "./Add";

import { BrowserRouter as Router, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={SignInSide} />
        <Route path="/home" component={App} />
        <Route path="/Add" component={Add} />
      </div>
    </Router>
  );
}

export default Routes;
