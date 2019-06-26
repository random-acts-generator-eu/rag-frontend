/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchContacts, editContact } from '../../actions/contacts';

class ModalForm extends React.Component {
  state = {
    modal: true,
    backdrop: true,
    firstname: '',
    lastname: '',
    level: ''
  };

  componentDidMount() {
    const { contacts } = this.props;

    const { id } = this.props.match.params;
    contacts.forEach(contact => {
      if (contact._id === id) {
        this.setState({
          firstname: contact.first_name,
          lastname: contact.last_name
        });
      }
    });
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  submitHandler = () => {
    const { firstname, lastname, level } = this.state;
    const { id } = this.props.match.params;

    const contactDetails = {
      firstname,
      lastname,
      level
    };
    this.props.editContact(id, contactDetails);
    this.setState({ firstname: '', lastname: '', level: '' });
    this.setState({ modal: false });
  };

  render() {
    const { history } = this.props;
    if (!this.state.modal) {
      this.props.fetchContacts();
      history.push('/contacts');
    }

    const { firstname, lastname } = this.state;
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <ModalHeader toggle={this.toggle}>Edit Form</ModalHeader>
          <ModalBody>
            <form>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstname}
                  onChange={this.changeHandler}
                />
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  onChange={this.changeHandler}
                />
              </div>
              <div>
                <p> How close are you guys? </p>
                <label htmlFor="level">friend</label>
                <section>
                  <input
                    type="radio"
                    name="level"
                    value="friend"
                    onChange={this.changeHandler}
                    required
                  />
                  <label htmlFor="friend">Friend</label>

                  <input
                    type="radio"
                    name="level"
                    value="close friend"
                    onChange={this.changeHandler}
                    required
                  />
                  <label htmlFor="close friend">Close friend</label>

                  <input
                    type="radio"
                    name="level"
                    value="best friend"
                    onChange={this.changeHandler}
                    required
                  />
                  <label htmlFor="best friend">Best friend</label>
                </section>
              </div>
              <button
                type="button"
                onClick={event => this.submitHandler(event)}
              >
                {' '}
                Edit Contact
              </button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts || []
  };
};

export default connect(
  mapStateToProps,
  { fetchContacts, editContact }
)(ModalForm);
