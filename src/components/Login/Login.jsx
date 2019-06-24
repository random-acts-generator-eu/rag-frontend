import React, { Component } from 'react';
import { LoginForm, Form, SideNote } from './Styles';

class Login extends Component {
  state = {};

  render() {
    return (
      <LoginForm>
        <Form>
          <h2>Welcome back,</h2>
          <div>
            <label htmlFor="Email">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </Form>
        <SideNote>
          <h3>New Here?</h3>
          <p>Sign up and start losing yourself in the service of others!</p>
          <button type="button">Sign Up</button>
        </SideNote>
      </LoginForm>
    );
  }
}

export default Login;
