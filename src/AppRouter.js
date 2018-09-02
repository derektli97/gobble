import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing.js";
import Events from "./Events/Events.js";

class AppRouter extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/events' component={Events} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppRouter;
