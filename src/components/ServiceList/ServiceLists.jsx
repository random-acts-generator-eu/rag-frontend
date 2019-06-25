/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actsDispatcher, deleteActsDispatcher } from '../../actions/acts';
import ServiceList from './ServiceList';
import { Cards } from './Styles';

class ServiceLists extends Component {
  componentDidMount() {
    this.props.actsDispatcher();
  }

  render() {
    return (
      <div>
        <Cards>
          {this.props.acts.map(act => (
            <ServiceList
              key={act._id}
              act={act}
              deleteHandler={this.props.deleteActsDispatcher}
            />
          ))}
        </Cards>
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
  { actsDispatcher, deleteActsDispatcher }
)(ServiceLists);
