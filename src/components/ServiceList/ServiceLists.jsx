/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import { actsDispatcher, deleteActsDispatcher } from '../../actions/acts';
import ServiceList from './ServiceList';
import Forms from './Form';
import ModalForm from './Modal';
import { Cards } from './Styles';

const Div = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3%;
`;

class ServiceLists extends Component {
  componentDidMount() {
    this.props.actsDispatcher();
  }

  render() {
    return (
      <Div>
        <Router>
          <Cards>
            {this.props.acts.map(act => (
              <ServiceList
                key={act._id}
                act={act}
                deleteHandler={this.props.deleteActsDispatcher}
              />
            ))}
          </Cards>
          <Forms header="Add" />
          <Route
            path="/service_list/edit/:id"
            render={props => <ModalForm {...props} header="Edit" />}
          />
        </Router>
      </Div>
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
