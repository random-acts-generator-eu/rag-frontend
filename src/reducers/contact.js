import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contacts: [],
  fetchingContact: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        fetchingContact: action.payload
      };
    case actionTypes.FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
