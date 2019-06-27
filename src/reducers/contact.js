import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contacts: [],
  loading: false,
  loadingContact: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case actionTypes.LOADING_CONTACTS:
      return {
        ...state,
        loading: action.payload
      };
    case actionTypes.ADD_CONTACTS_LOADING:
      return {
        ...state,
        loadingContact: action.payload
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: action.payload
      };
    case actionTypes.EDIT_CONTACT:
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
