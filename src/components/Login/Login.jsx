/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { LoginForm, Form, SideNote, LinkStyle } from './Styles';
import { loginDispatcher } from '../../actions/auth';
import '../../loader.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginHandler = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    this.props.loginDispatcher(email, password, history);
  };

  render() {
    if (this.props.loading) {
      return <div className="loader">Loading...</div>;
    }
    const { error } = this.props;

    if (error !== null) {
      toast.error(' Incorrect username or password');
    }
    const { email, password } = this.state;
    return (
      <LoginForm>
        <Form onSubmit={event => this.loginHandler(event)}>
          <h2>Welcome back,</h2>
          <div>
            <label htmlFor="Email">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter username"
              value={email}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={this.changeHandler}
              required
            />
          </div>
          <button type="submit">Login</button>
        </Form>
        <SideNote>
          <h3>New Here?</h3>
          <p>Sign up and start losing yourself in the service of others!</p>
          <LinkStyle to="/signup">Sign Up</LinkStyle>
        </SideNote>
      </LoginForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    error: state.auth.errorMessage,
    loading: state.auth.loading
  };
};
export default connect(
  mapStateToProps,
  { loginDispatcher }
)(Login);
