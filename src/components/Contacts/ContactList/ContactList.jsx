/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from '../../../actions/contacts';
import Contact from '../Contact/Contact';
import Div from './styled';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    const list = contacts || [];
    return (
      <Div>
        {list.length === 0 ? (
          <h3>No Contacts</h3>
        ) : (
          list.map(contact => <Contact key={contact._id} contact={contact} />)
        )}
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  fetchContacts: PropTypes.func
};

export default connect(
  mapStateToProps,
  { fetchContacts }
)(ContactList);
