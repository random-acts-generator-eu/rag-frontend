/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavContainer, Logo, Nav } from './Styles';
import userLogout from '../../actions/logout';

const Navigation = props => {
  const homePageLink = () => {
    window.location.href = '/';
  };
  return (
    <NavContainer>
      <Logo>
        <h2 onClick={() => homePageLink()}> Random Acts Generator</h2>
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
