/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SignupForm, Form, SideNote, LinkStyle } from './Styles';
import { signupDispatcher } from '../../actions/auth';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signupHandler = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, phone } = this.state;
    const { history } = this.props;
    this.props.signupDispatcher(
      firstName,
      lastName,
      email,
      password,
      phone,
      history
    );
  };

  render() {
    const { email, password, firstName, lastName, phone } = this.state;
    return (
      <SignupForm>
        <Form onSubmit={event => this.signupHandler(event)}>
          <h2>Join our community</h2>
          <div>
            <label htmlFor="Firstname">First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Enter firstName"
              value={firstName}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="LastName">Last Name</label>
            <input
              name="lastName"
              type="name"
              placeholder="Enter lastName"
              value={lastName}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="Email">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="Email">Phone</label>
            <input
              name="phone"
              type="phone"
              placeholder="Enter phone"
              value={phone}
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
          <button type="submit">Signup</button>
        </Form>
        <SideNote>
          <h3>New Here?</h3>
          <p>
            One of us? If you already has an account, just sign in. We have
            missed you!
          </p>
          <LinkStyle to="/login">Login</LinkStyle>
        </SideNote>
      </SignupForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(
  mapStateToProps,
  { signupDispatcher }
)(Signup);
