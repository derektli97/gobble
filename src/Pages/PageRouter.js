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
          <Route path='/map'
            component={() => {
              window.location = "https://www.google.com/maps/d/viewer?mid=1uHUnhyxuEpqkkhdfYoi32nB3wXm_iT-E&ll=30.610587263762287%2C-96.34334377494662&z=16";
              return null;
            }
            } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PageRouter;
