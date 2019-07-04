import React from 'react';
import {Router, Link, Route} from 'react-router-dom';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';
import {Login} from './auth/Login';
import authService from './auth/AuthService';
import history from './history';

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

export default () => (
  <Router history={history}>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <Route path="/private1" component={Private1} />
      <Route path="/private2" component={Private2} />
      <Route path="/private3" component={Private3} />
      <Route path="/admin" component={Admin} />
      <Route path="/callback" render={(props) => {
        authService.handleAuthentication(props);
        return null;
      }}/>
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);