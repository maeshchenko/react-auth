/* global Auth0Lock, restdb */
import React, {Component} from 'react';
import {
  Redirect
} from "react-router-dom";
// import Auth0Lock from 'auth0-lock';
// import fakeAuth from './fakeAuth';
// restdb jsapi component

import AuthService from './AuthService';
var db = null;


export class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  constructor(props) {
    super(props);

    this.$auth = AuthService;

  }

  login = () => {
    this.$auth.login();
    /*fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });*/
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}