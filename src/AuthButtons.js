import React from 'react';
import {
  withRouter
} from "react-router-dom";

//import fakeAuth from './fakeAuth';
import authService from './auth/AuthService';

const AuthButton = withRouter(
  ({ history }) =>
    authService.isAuthenticated() ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            authService.logout();
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);

export default AuthButton;