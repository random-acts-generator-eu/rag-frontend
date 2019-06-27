import * as actionTypes from './actionTypes';

const logout = payload => {
  return {
    type: actionTypes.LOGOUT,
    payload
  };
};

const userLogout = () => dispatch => {
  dispatch(logout(true));
  localStorage.removeItem('token');
  window.location.replace('/signup');
};

export default userLogout;
