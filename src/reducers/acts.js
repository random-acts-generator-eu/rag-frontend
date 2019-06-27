import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loadingActs: false,
  acts: [],
  errorMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.LOADING_ACTS:
      return {
        ...state,
        loadingActs: action.payload
      };
    case types.ADD_ACTS_LOADING:
      return {
        ...state,
        loadingActs: action.payload
      };
    case types.GET_ACTS:
      return {
        ...state,
        acts: action.payload
      };
    case types.DELETE_ACTS:
      return {
        ...state,
        acts: action.payload
      };
    case types.ADD_ACTS:
      return {
        ...state,
        acts: action.payload
      };
    case types.FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
