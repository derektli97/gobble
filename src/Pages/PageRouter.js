import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "Pages/Landing/Landing";
import EventsWrapper from "Pages/Events/EventsWrapper";
import VolunteerWrapper from "Pages/Volunteer/VolunteerWrapper";

class PageRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/events' component={EventsWrapper} />
          <Route path='/volunteer' component={VolunteerWrapper} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PageRouter;
