import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: null,
  contacts: [],
  acts: [],
  login: !!localStorage.getItem('token'),
  errorMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.LOGGED_IN:
      return {
        ...state,
        login: true
      };
    case types.CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case types.ACTS:
      return {
        ...state,
        acts: action.payload
      };

    case types.FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
