/* eslint-disable react/sort-comp */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form } from './Styles';
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

  editHandler = event => {
    event.preventDefault();
    const { description, level } = this.state;
    const { history } = this.props;
    const { id } = this.props.match.params;

    this.props.editActsDispatcher(description, level, id, history);
    this.setState({ description: '', level: '' });
  };

  componentDidMount() {
    const { header, acts } = this.props;
    if (header === 'Edit') {
      const { id } = this.props.match.params;
      acts.forEach(act => {
        if (act._id === id) {
          this.setState({
            description: act.description
          });
        }
      });
    }
  }

  render() {
    const { description } = this.state;
    const { header } = this.props;
    return (
      <Form
        onSubmit={
          header === 'Edit'
            ? event => this.editHandler(event)
            : event => this.addHandler(event)
        }
      >
        <h2>{header} act</h2>
        <div>
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
        </div>
        <div>
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
        </div>
        <button type="submit">{header} Act</button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    acts: state.act.acts
  };
};
export default connect(
  mapStateToProps,
  { addActsDispatcher, editActsDispatcher }
)(Forms);
