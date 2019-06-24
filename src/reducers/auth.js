import * as types from '../actions/actionTypes';

const initialState = {
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
