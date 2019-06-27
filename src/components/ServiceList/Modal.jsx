/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { InputDiv, RadioInput, BtnContainer } from './Styles';

import { editActsDispatcher, actsDispatcher } from '../../actions/acts';

class ModalForm extends React.Component {
  state = {
    modal: true,
    backdrop: true,
    description: '',
    level: ''
  };

  componentDidMount() {
    const { acts } = this.props;
    const { id } = this.props.match.params;
    acts.forEach(act => {
      if (act._id === id) {
        this.setState({
          description: act.description
        });
      }
    });
  }

  componentDidUpdate(_prevProps, _prevState) {
    const { history } = this.props;
    if (!this.state.modal) {
      this.props.actsDispatcher();
      history.push('/service_list');
    }
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
    const { description, level } = this.state;
    const { history } = this.props;
    const { id } = this.props.match.params;

    this.props.editActsDispatcher(description, level, id, history);
    this.setState({ description: '', level: '' });
    this.props.actsDispatcher();
  };

  render() {
    const { description } = this.state;
    const { loading } = this.props;
    const { error } = this.props;
    if (error !== null) {
      toast.error(' Invalid details');
    }
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <ModalHeader toggle={this.toggle}>
            Edit Act of services Idea
          </ModalHeader>
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <ModalBody>
              <form>
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
                  />
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
                  <button
                    className="contact-btn"
                    type="button"
                    onClick={event => this.submitHandler(event)}
                  >
                    Edit Act
                  </button>
                </BtnContainer>
              </form>
            </ModalBody>
          )}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    acts: state.act.acts || [],
    loading: state.act.loading,
    error: state.act.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { editActsDispatcher, actsDispatcher }
)(ModalForm);
