import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Modal from './Modal/Modal';
import Form from './ContactForm/Form';
import ContactList from './ContactList/ContactList';

const Div = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3%;
`;

export default function ContactspageView() {
  return (
    <Div>
      <Router>
        <ContactList />
        <Form />
        <Route
          exact
          path="/contacts/edit/:id"
          render={props => <Modal {...props} />}
        />
      </Router>
    </Div>
  );
}
