import React from 'react';
import {Router, Link, Route} from 'react-router-dom';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import {Login} from './auth/Login';
import authService from './auth/AuthService';
import history from './history';
import Public from './Public';
import Private1 from './Private1';
import Private2 from './Private2';
import Private3 from './Private3';
import Admin from './Admin';

export default () => (
  <Router history={history}>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/private1">Protected Page</Link>
        </li>
        <li>
          <Link to="/private2">Protected Page</Link>
        </li>
        <li>
          <Link to="/private3">Protected Page</Link>
        </li>
        <li>
          <Link to="/admin">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <PrivateRoute path="/login" component={Login} />
      <PrivateRoute path="/private1" component={Private1} />
      <PrivateRoute path="/private2" component={Private2} />
      <PrivateRoute path="/private3" component={Private3} />
      <PrivateRoute path="/admin" component={Admin} />
      <Route path="/callback" render={(props) => {
        authService.handleAuthentication(props);
        return null;
      }}/>
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);