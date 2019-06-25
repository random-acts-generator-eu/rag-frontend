import axios from 'axios';
import * as actionTypes from './actionTypes';

const BASE_URL = `https://rag-eu.herokuapp.com/acts`;

const headers = {
  Authorization: localStorage.getItem('token')
};

const loading = payload => {
  return {
    type: actionTypes.LOADING,
    payload
  };
};

const failure = payload => {
  return {
    type: actionTypes.FAILURE,
    payload
  };
};

const actsAction = payload => {
  return {
    type: actionTypes.GET_ACTS,
    payload
  };
};

// eslint-disable-next-line import/prefer-default-export
export const actsDispatcher = () => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.get(BASE_URL, { headers });
    dispatch(actsAction(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};
