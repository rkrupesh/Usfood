import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import Dashboard from './client/views/Dashboard.jsx';
import Login from './client/views/login.jsx';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      {/* <Route exact path="/" component={} /> */}
    </div>
  </HashRouter>, document.getElementById('app'));
