import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing.js";
import Events from "./Events/Events.js";

class AppRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/events' component={Events} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
