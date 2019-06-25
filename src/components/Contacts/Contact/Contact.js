import React from 'react';
import Div from './styled';

export default function Contact(props) {
  const { contact } = props;
  return (
    <Div>
      <p>
        Name: {contact.first_name} {contact.last_name}
      </p>
      <p>Closeness: {contact.level}</p>
    </Div>
  );
}
