import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "Pages/Landing/Landing";
import Events from "Pages/Events/Events";

class PageRouter extends React.Component {
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

export default PageRouter;
