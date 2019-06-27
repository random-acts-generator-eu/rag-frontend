/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    await this.randomizeActs();
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
    const { contacts } = this.props;

    if (this.props.loadingAct || this.props.loadingContact) {
      return <div className="loader">Loading...</div>;
    }
    if (contacts.length === 0) {
      return <div>Pls, add at least one contact to randomize acts</div>;
    }
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

Dashboard.propTypes = {
  acts: PropTypes.arrayOf(PropTypes.object),
  contacts: PropTypes.arrayOf(PropTypes.object),
  actsDispatcher: PropTypes.func,
  fetchContacts: PropTypes.func,
  loadingAct: PropTypes.bool,
  loadingContact: PropTypes.bool
};

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
