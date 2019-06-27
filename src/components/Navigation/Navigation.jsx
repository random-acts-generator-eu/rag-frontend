/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavContainer, Logo, Nav } from './Styles';
import userLogout from '../../actions/logout';

const Navigation = props => {
  return (
    <NavContainer>
      <Logo>
        <h2>
          <NavLink to="/">Random Acts Generator</NavLink>
        </h2>
      </Logo>
      <Nav>
        {props.login ? (
          <>
            <NavLink to="/service_list">Acts</NavLink>
            <NavLink exact to="/contacts">
              Contacts
            </NavLink>
            <NavLink exact to="" onClick={props.userLogout}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </Nav>
    </NavContainer>
  );
};

const mapStateToProps = state => {
  return {
    login: state.auth.login
  };
};

export default connect(
  mapStateToProps,
  { userLogout }
)(Navigation);
