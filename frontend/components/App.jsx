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

<<<<<<< HEAD
    <h1 className="app-title">The Shows</h1>
=======
    <h1>The Shows</h1>
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/greeting" component={Greeting} />
    <Route exact path="/venues" component={VenuesIndexContainer} />
    <Route exact path="/venues/:venueId" component={VenueShowContainer} />
<<<<<<< HEAD
    <Route path="/" component={ShowsIndexContainer} />
=======
    <Route path="/shows" component={ShowsIndexContainer} />
>>>>>>> 793f10e6e0bdb20deaea601b78aa1cd9c1f24468

  </div>
);

export default App;
