/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actsDispatcher } from '../../actions/acts';
import { fetchContacts } from '../../actions/contacts';

class Dashboard extends Component {
  state = {
    act: {},
    contact: {}
  };

  async componentDidMount() {
    await this.props.actsDispatcher();
    await this.props.fetchContacts();
    this.randomizeActs();
  }

  randomizeActs = () => {
    const { acts, contacts } = this.props;
    const randAct = acts[Math.floor(Math.random() * acts.length)];
    const randContact = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState({
      act: randAct,
      contact: randContact
    });
  };

  render() {
    const { act, contact } = this.state;
    return (
      <div>
        <p style={{ fontSize: '2rem' }}>{act.description}</p>
        <p style={{ fontSize: '2rem' }}>{act.level}</p>
        <p style={{ fontSize: '2rem' }}>
          {contact.first_name} {contact.last_name}
        </p>
        <p style={{ fontSize: '2rem' }}>{contact.level}</p>
        <button onClick={() => this.randomizeActs()}>Radonmize Act</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    acts: state.act.acts,
    contacts: state.contacts.contacts,
    loadingAct: state.act.acts,
    loadingContact: state.contacts.contacts
  };
};
export default connect(
  mapStateToProps,
  { actsDispatcher, fetchContacts }
)(Dashboard);
