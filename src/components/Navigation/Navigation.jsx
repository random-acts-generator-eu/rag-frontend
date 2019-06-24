import React from 'react';
import { NavContainer, Logo, Nav } from './Styles';

const Navigation = () => {
  return (
    <NavContainer>
      <Logo>
        <h2>Random Act Generator</h2>
      </Logo>
      <Nav>
        <a href="/signup#">Sign Up</a>
        <a href="/login#">Login</a>
      </Nav>
    </NavContainer>
  );
};

export default Navigation;
