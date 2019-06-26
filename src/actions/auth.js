import axios from 'axios';
import * as actionTypes from './actionTypes';

const BASE_URL = `https://rag-eu.herokuapp.com/auth`;
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
const contactsAction = payload => {
  return {
    type: actionTypes.CONTACTS,
    payload
  };
};
const actsAction = payload => {
  return {
    type: actionTypes.ACTS,
    payload
  };
};

export const loginDispatcher = (email, password) => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    const { contacts, acts } = response.data.user;
    dispatch(loggedIn(response.data.token));
    localStorage.setItem('token', response.data.token);
    if (contacts.length > 0) {
      localStorage.setItem('contacts', true);
    }
    dispatch(contactsAction(contacts));
    dispatch(actsAction(acts));
    // history.push('/');
    window.location.href = '/';
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};

export const signupDispatcher = (
  firstName,
  lastName,
  email,
  password,
  phone,
  history
) => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      firstName,
      lastName,
      email,
      password,
      phone
    });
    const { contacts, acts } = response.data.user;

    dispatch(loggedIn(response.data.token));
    localStorage.setItem('token', response.data.token);
    dispatch(contactsAction(contacts));
    dispatch(actsAction(acts));
    history.push('/contacts');
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};
