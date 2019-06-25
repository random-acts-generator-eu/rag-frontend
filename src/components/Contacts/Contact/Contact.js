import React from 'react';
import { connect } from 'react-redux';
import Div from './styled';
import { deleteContact } from '../../../actions/contacts';

function Contact(props) {
  const { contact } = props;
  return (
    <Div>
      <p>
        Name: {contact.first_name} {contact.last_name}
      </p>
      <p>Closeness: {contact.level}</p>
      <button type="submit">Edit</button>
      <button type="submit" onClick={() => props.deleteContact(contact._id)}>
        delete
      </button>
    </Div>
  );
}

export default connect(
  null,
  { deleteContact }
)(Contact);
