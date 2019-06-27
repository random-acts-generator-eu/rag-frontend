/* eslint-disable react/sort-comp */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  FormContainer,
  ServiceForm,
  InputDiv,
  RadioInput,
  BtnContainer
} from './Styles';
import '../Contacts/ContactForm/style.css';
import { addActsDispatcher, editActsDispatcher } from '../../actions/acts';

class Forms extends Component {
  state = {
    description: '',
    level: ''
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addHandler = event => {
    event.preventDefault();
    const { description, level } = this.state;
    this.props.addActsDispatcher(description, level);
    this.setState({ description: '', level: '' });
  };

  render() {
    const { error } = this.props;
    if (error !== null) {
      toast.error(' Invalid details');
    }

    const { description } = this.state;
    const { loading } = this.props;

    return loading ? (
      <div className="loader">Loading...</div>
    ) : (
      <FormContainer>
        <ServiceForm onSubmit={event => this.addHandler(event)}>
          <h2>Add A New Act of Service</h2>
          <InputDiv>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              cols="20"
              rows="10"
              placeholder="Enter description.."
              value={description}
              onChange={this.changeHandler}
              required
            ></textarea>
          </InputDiv>
          <RadioInput>
            <label htmlFor="level">Level</label>
            <section>
              <input
                type="radio"
                name="level"
                value="easy"
                onChange={this.changeHandler}
                required
              />
              <label htmlFor="Easy">Easy</label>

              <input
                type="radio"
                name="level"
                value="medium"
                onChange={this.changeHandler}
                required
              />
              <label htmlFor="medium">Medium</label>

              <input
                type="radio"
                name="level"
                value="hard"
                onChange={this.changeHandler}
                required
              />
              <label htmlFor="hard">Hard</label>
            </section>
          </RadioInput>
          <BtnContainer>
            <button className="contact-btn" type="submit">
              Add Act
            </button>
          </BtnContainer>
        </ServiceForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    acts: state.act.acts,
    loading: state.act.loadingActs,
    error: state.act.errorMessage
  };
};
export default connect(
  mapStateToProps,
  { addActsDispatcher, editActsDispatcher }
)(Forms);
