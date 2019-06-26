import React from 'react';

import { Div, LinkStyle } from './Styles';

const Footer = () => {
  return (
    <Div>
      <h3>Random Acts Generator</h3>
      <div>
        <LinkStyle to="/contacts">Contact</LinkStyle>{' '}
        <LinkStyle to="/service_list">Acts List</LinkStyle>{' '}
        <LinkStyle to="/">Profile</LinkStyle>
      </div>
      <p>&copy; Copyright 2019</p>
    </Div>
  );
};

export default Footer;
