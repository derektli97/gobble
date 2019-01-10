import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "Pages/Landing/Landing";
import EventsWrapper from "Pages/Events/EventsWrapper";
import VolunteerWrapper from "Pages/Volunteer/VolunteerWrapper";
import LiveWrapper from "Pages/Live/LiveWrapper";

class PageRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/events' component={EventsWrapper} />
          <Route path='/volunteer' component={VolunteerWrapper} />
          <Route path='/live' component={LiveWrapper} />
          {/* Note: get rid of these pages after live is finalized ... */}
          <Route path='/map'
            component={() => {
              window.location = "https://www.google.com/maps/d/viewer?mid=1uHUnhyxuEpqkkhdfYoi32nB3wXm_iT-E&ll=30.610587263762287%2C-96.34334377494662&z=16";
              return null;
            }
            } />
          <Route path='/schedule'
            component={() => {
              window.location = "https://drive.google.com/open?id=1lSdYikRQmFsjvJpWbS1bSFEwg1n3vh3_";
              return null;
            }
            } />
          <Route path='/slack'
            component={() => {
              window.location = "https://join.slack.com/t/tamuhack2019/shared_invite/enQtNTE4NTM1NDkwMzc0LTg2ODE0YjJlNTRiN2M5YmRmNWUwY2Y5YjJhY2M0NTdlNjgyMmNjNzhkNmNiMDYxNjViOTQxNTVhZDU2YzhiYzA";
              return null;
            }
            } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default PageRouter;
