import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer, Logo, Nav } from './Styles';

const Navigation = () => {
  return (
    <NavContainer>
      <Logo>
        <h2>Random Acts Generator</h2>
      </Logo>
      <Nav>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
