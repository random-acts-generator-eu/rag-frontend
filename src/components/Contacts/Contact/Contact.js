/* eslint-disable react/require-default-props */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Div from './styled';
import { deleteContact } from '../../../actions/contacts';

const Contact = props => {
  const { contact } = props;
  return (
    <Div>
      <p>
        Name: {contact.first_name} {contact.last_name}
      </p>
      <p>Closeness: {contact.level}</p>
      <Link to={`/contacts/edit/${contact._id}`}>
        <button type="submit">Edit</button>{' '}
      </Link>
      <button type="submit" onClick={() => props.deleteContact(contact._id)}>
        delete
      </button>
    </Div>
  );
};

Contact.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  level: PropTypes.string
};

export default connect(
  null,
  { deleteContact }
)(Contact);
