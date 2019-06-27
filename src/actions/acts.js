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
const loadingActs = payload => {
  return {
    type: actionTypes.ADD_ACTS_LOADING,
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

const deleteActsAction = payload => {
  return {
    type: actionTypes.DELETE_ACTS,
    payload
  };
};
const addActsAction = payload => {
  return {
    type: actionTypes.ADD_ACTS,
    payload
  };
};
const editActsAction = payload => {
  return {
    type: actionTypes.EDIT_ACTS,
    payload
  };
};

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

export const deleteActsDispatcher = id => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, { headers });
    dispatch(deleteActsAction(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};

export const addActsDispatcher = (description, level) => async dispatch => {
  dispatch(loadingActs(true));
  try {
    const response = await axios.post(
      `${BASE_URL}`,
      {
        description,
        level
      },
      { headers }
    );
    dispatch(addActsAction(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loadingActs(false));
  }
};

export const editActsDispatcher = (
  description,
  level,
  id,
  history
) => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}`,
      {
        description,
        level
      },
      { headers }
    );
    dispatch(editActsAction(response.data));
    history.push('/service_list');
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};
