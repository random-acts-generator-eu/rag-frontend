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
  localStorage.removeItem('contact');
  window.location.href('/signup');
};

export default userLogout;
