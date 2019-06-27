/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Div from './styled';
import { deleteContact } from '../../../actions/contacts';

const Contact = props => {
  const { contact } = props;
  return (
    <tr>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      <td>{contact.level}</td>
      <td>
        <Link to={`/contacts/edit/${contact._id}`}>
          <i className="fas fa-user-edit" />
        </Link>
        <i
          className="fas fa-trash-alt"
          onClick={() => props.deleteContact(contact._id)}
        />
      </td>
    </tr>
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
