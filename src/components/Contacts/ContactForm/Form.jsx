/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './style.css';
import { addContact, editContact } from '../../../actions/contacts';

class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    level: ''
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onAddContact = event => {
    event.preventDefault();
    const { firstname, lastname, level } = this.state;
    const userDetails = {
      firstName: firstname,
      lastName: lastname,
      level
    };
    this.props.addContact(userDetails);
    this.setState({ firstname: '', lastname: '', level: '' });
  };

  onEditContact = event => {
    event.preventDefault();
    const { firstname, lastname, level } = this.state;
    const { id } = this.props.match.params;

    const contactDetails = {
      firstName: firstname,
      lastName: lastname,
      level
    };
    this.props.editContact(id, contactDetails);
    this.setState({ firstname: '', lastname: '', level: '' });
  };

  render() {
    const { firstname, lastname } = this.state;
    const { loading } = this.props;
    const { error } = this.props;
    if (error !== null) {
      toast.error(' Invalid details');
    }
    return loading ? (
      <div className="loader">Loading...</div>
    ) : (
      <div className="form-container">
        <form className="contact-form" onSubmit={this.onAddContact}>
          <h2> Add a New Contact to Your List</h2>

          <div className="input-field">
            <div className="input-box">
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={this.handleInputChange}
                required
                placeholder="Enter firstname"
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={this.handleInputChange}
                required
                placeholder="Enter lastname"
              />
            </div>

            <div className="radio-form">
              <p> How close are you guys? </p>
              <div className="radio">
                <input
                  type="radio"
                  name="level"
                  id="level"
                  value="friend"
                  onChange={this.handleInputChange}
                  required
                />
                <label htmlFor="1">Friend</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="level"
                  id="level"
                  value="close friend"
                  onChange={this.handleInputChange}
                  required
                />
                <label htmlFor="2">Close friend</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="level"
                  id="level"
                  value="best friend"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="3">Best friend</label>
              </div>
              <div className="contact-btn-container">
                <button className="contact-btn" type="submit">
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Form.propType = {
  addContact: PropTypes.func,
  editContact: PropTypes.func,
  id: PropTypes.string
};

const mapStateToProps = state => {
  return {
    loading: state.contacts.loadingContact,
    error: state.contacts.error
  };
};

export default connect(
  mapStateToProps,
  { addContact, editContact }
)(Form);
