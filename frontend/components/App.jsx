import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import Greeting from './greeting/greeting';

const App = () => (
  <div>

    <h1>The Shows</h1>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <Route path="/greeting" component={Greeting} />

  </div>
);

export default App;
