import axios from 'axios';
import * as actionTypes from './actionTypes';

const BASE_URL = `https://rag-eu.herokuapp.com`;

const headers = {
  Authorization: localStorage.getItem('token')
};

const loading = payload => {
  return {
    type: actionTypes.LOADING,
    payload
  };
};

const newContact = payload => {
  return {
    type: actionTypes.FETCH_CONTACTS,
    payload
  };
};

const failure = payload => {
  return {
    type: actionTypes.FAILURE,
    payload
  };
};

const fetchingContacts = payload => {
  return {
    type: actionTypes.FETCH_CONTACTS,
    payload
  };
};

const addContact = contactDetails => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contactDetails, {
      headers
    });
    const contactsData = response.data;
    dispatch(newContact(contactsData));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};

const fetchContacts = () => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.get(`${BASE_URL}/contacts`, {
      headers
    });
    dispatch(fetchingContacts(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};

export { addContact, fetchContacts };
