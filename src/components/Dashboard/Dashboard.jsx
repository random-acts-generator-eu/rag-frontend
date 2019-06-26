/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actsDispatcher } from '../../actions/acts';
import { fetchContacts } from '../../actions/contacts';
import { Div, ActLevel, ButtonDiv, Contact } from './style';
import '../../loader.css';

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
    if (this.props.loadingAct && this.props.loadingContact) {
      return <div className="loader">Loading...</div>;
    }
    const { act, contact } = this.state;
    return (
      <Div>
        <div>
          <div>
            <h2>{act.description}</h2>
            <ActLevel>Difficulty: {act.level}</ActLevel>
          </div>
          <Contact>
            <p>
              {contact.first_name} {contact.last_name}
            </p>
            <p>Closeness: {contact.level}</p>
          </Contact>
          <ButtonDiv>
            <button onClick={() => this.randomizeActs()}>Randomize</button>
          </ButtonDiv>
        </div>
      </Div>
    );
  }
}
const mapStateToProps = state => {
  return {
    acts: state.act.acts,
    contacts: state.contacts.contacts,
    loadingAct: state.act.loading,
    loadingContact: state.contacts.loading
  };
};

export default connect(
  mapStateToProps,
  { actsDispatcher, fetchContacts }
)(Dashboard);
