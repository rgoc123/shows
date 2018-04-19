import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import VenuesIndexContainer from './venues/venues_index_container';
import VenueShowContainer from './venues/venue_show_container';
import ShowsIndexContainer from './shows/shows_index_container';
import Greeting from './greeting/greeting';

const App = () => (
  <div>

    <h1 className="app-title">The Shows</h1>

    <Route path="/" component={ShowsIndexContainer} />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/greeting" component={Greeting} />
    <Route exact path="/venues" component={VenuesIndexContainer} />
    <Route exact path="/venues/:venueId" component={VenueShowContainer} />
    <Route path="/shows" component={ShowsIndexContainer} />

  </div>
);

export default App;
