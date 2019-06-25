/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form } from './Styles';
import { addActsDispatcher } from '../../actions/acts';

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
    const { history } = this.props;
    this.props.addActsDispatcher(description, level, history);
    this.setState({ description: '', level: '' });
  };

  render() {
    const { description } = this.state;
    return (
      <Form onSubmit={event => this.addHandler(event)}>
        <h2>Add new act</h2>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            cols="20"
            rows="10"
            placeholder="Enter description.."
            value={description}
            onChange={this.changeHandler}
          ></textarea>
        </div>
        <div>
          <label htmlFor="level">Level</label>
          <section>
            <input
              type="radio"
              name="level"
              value="easy"
              onChange={this.changeHandler}
            />
            <label htmlFor="Easy">Easy</label>

            <input
              type="radio"
              name="level"
              value="medium"
              onChange={this.changeHandler}
            />
            <label htmlFor="medium">Medium</label>

            <input
              type="radio"
              name="level"
              value="hard"
              onChange={this.changeHandler}
            />
            <label htmlFor="hard">Hard</label>
          </section>
        </div>
        <button type="submit">Add New Act</button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(
  mapStateToProps,
  { addActsDispatcher }
)(Forms);
