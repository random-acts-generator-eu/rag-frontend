import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loadingLogin: false,
  token: null,
  contacts: [],
  acts: [],
  login: !!localStorage.getItem('token'),
  logout: false,
  errorMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_LOGIN:
      return {
        ...state,
        loadingLogin: action.payload
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
        errorMessage: action.payload
      };
    case types.LOGOUT:
      return {
        ...state,
        logout: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
