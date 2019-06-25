import React from 'react';
import styled from 'styled-components';
import Form from './ContactForm/Form';
import ContactList from './ContactList/ContactList';

const Div = styled.div`
  display: flex;
  width: 100%;
`;

export default function ContactspageView() {
  return (
    <Div>
      <ContactList />
      <Form />
    </Div>
  );
}
