import {
  LOGIN_ERROR,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUESTING,
  LOGOUT_SUCCESS
} from "./actionTypes";

export const login = (email, password, callback) => {
  return dispatch => {
    dispatch(loginRequesting());

    setTimeout(() => {
      const user = {
        name: 'John Doe',
        email: 'john@example.com',
        auth_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      };
      dispatch(loginSuccess('Login successfully!'));
      localStorage.setItem('user', JSON.stringify(user));
      callback();
    }, 1000);
  }
};

export const loginRequesting = () => {
  return {
    type: LOGIN_REQUESTING
  }
};

export const loginSuccess = successMessage => {
  return {
    type: LOGIN_SUCCESS,
    payload: successMessage
  }
};

export const loginErr = err => {
  return {
    type: LOGIN_ERROR,
    payload: err
  }
};

export const logout = (callback) => {
  return dispatch => {
    dispatch(logoutRequesing());
    setTimeout(() => {
      localStorage.clear();
      dispatch(logoutSuccess('Logout successfully!'));
      callback();
    }, 1000)
  }
};

export const logoutRequesing = () => {
  return {
    type: LOGOUT_REQUESTING
  }
};

export const logoutSuccess = (msg) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: msg
  }
};

export const logoutError = (err) => {
  return {
    type: LOGOUT_ERROR,
    payload: err
  }
};