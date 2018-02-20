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
import Greeting from './greeting/greeting';

const App = () => (
  <div>

    <h1>The Shows</h1>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/greeting" component={Greeting} />
    <Route path="/venues" component={VenuesIndexContainer} />

  </div>
);

export default App;
