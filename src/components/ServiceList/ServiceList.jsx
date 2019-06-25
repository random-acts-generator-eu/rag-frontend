/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actsDispatcher } from '../../actions/acts';

class ServiceList extends Component {
  componentDidMount() {
    this.props.actsDispatcher();
  }

  render() {
    console.log(this.props.acts);
    return (
      <div>
        <p>Hello</p>
      </div>
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
  { actsDispatcher }
)(ServiceList);
