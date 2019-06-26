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

const getContacts = payload => {
  return {
    type: actionTypes.FETCH_CONTACTS,
    payload
  };
};

const deletingContact = payload => {
  return {
    type: actionTypes.DELETE_CONTACT,
    payload
  };
};

const editingContact = payload => {
  return {
    type: actionTypes.EDIT_CONTACT,
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
    dispatch(getContacts(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};

const deleteContact = contactID => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.delete(`${BASE_URL}/contacts/${contactID}`, {
      headers
    });
    dispatch(deletingContact(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};

const editContact = (contactID, contactDetails) => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axios.put(
      `${BASE_URL}/contacts/${contactID}`,
      contactDetails,
      {
        headers
      }
    );
    dispatch(editingContact(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(loading(false));
  }
};

export { addContact, fetchContacts, deleteContact, editContact };