/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import { actsDispatcher, deleteActsDispatcher } from '../../actions/acts';
import ServiceList from './ServiceList';
import Forms from './Form';
import ModalForm from './Modal';
// import { Cards } from './Styles';
import Div, { Table, TableDiv } from '../Contacts/ContactList/styled';

const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3%;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

class ServiceLists extends Component {
  componentDidMount() {
    this.props.actsDispatcher();
  }

  render() {
    const { acts } = this.props;
    return (
      <ContentDiv>
        <Router>
          <Div>
            <TableDiv>
              <Table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Level</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {acts.length === 0 ? (
                    <h3>No Acts, Pls add one</h3>
                  ) : (
                    this.props.acts.map(act => (
                      <ServiceList
                        key={act._id}
                        act={act}
                        deleteHandler={this.props.deleteActsDispatcher}
                      />
                    ))
                  )}
                </tbody>
              </Table>
            </TableDiv>
          </Div>
          <Forms header="Add" />
          <Route
            path="/service_list/edit/:id"
            render={props => <ModalForm {...props} header="Edit" />}
          />
        </Router>
      </ContentDiv>
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
