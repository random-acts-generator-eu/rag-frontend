import axios from 'axios';
import * as actionTypes from './actionTypes';

const dummyLink = `http://localhost:5000/api/login`;
const loading = payload => {
  return {
    type: actionTypes.LOADING,
    payload
  };
};
const loggedIn = payload => {
  return {
    type: actionTypes.LOGGED_IN,
    payload
  };
};
const failure = payload => {
  return {
    type: actionTypes.FAILURE,
    payload
  };
};

// eslint-disable-next-line import/prefer-default-export
export const loginDispatcher = (email, password) => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.post(dummyLink, { email, password });
    dispatch(loggedIn(response.data.token));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};
