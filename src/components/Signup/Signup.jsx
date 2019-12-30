/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
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
    const { error } = this.props;
    const { email, password, firstName, lastName, phone } = this.state;

    if (error !== null) {
      toast.error(
        'Invalid credentials. Password should be 7 characters or more'
      );
    }

    return this.props.loading ? (
      <div className="loader">Loading...</div>
    ) : (
      <SignupForm>
        <Form onSubmit={event => this.signupHandler(event)}>
          <h2>Join our community</h2>
          <div>
            <label htmlFor="Firstname">First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="firstName"
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
              placeholder="lastName"
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
              placeholder="email address"
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
              placeholder="phone"
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
              placeholder="password"
              value={password}
              onChange={this.changeHandler}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </Form>
        <SideNote>
          <p>
            <strong>Random Acts Generator</strong> is an app that reminds users
            to perform an act of service to someone on their contact list and
            also provides ideas for the user to perform in situations where they
            can’t come up with one.
          </p>

          <p>
            The best way to find yourself is to lose yourself in the service of
            others
          </p>

          <section>
            <h3>One of us?</h3>
            <p>
              If you already has an account, just sign in. We have missed you!
            </p>
          </section>
          <LinkStyle to="/login">Login</LinkStyle>
        </SideNote>
      </SignupForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.errorMessage,
    loading: state.auth.loadingLogin
  };
};
export default connect(
  mapStateToProps,
  { signupDispatcher }
)(Signup);
