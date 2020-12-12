import {
  LOGIN_ERROR,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_REQUESTING,
  LOGOUT_SUCCESS
} from "./actionTypes";

const initialState = {
  loading: false,
  successMsg: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        successMsg: action.payload,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        successMsg: null,
        error: action.payload
      };

    case LOGOUT_REQUESTING:
      return {
        ...state,
        loading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        successMsg: action.payload,
        error: null
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        successMsg: null,
        error: action.payload
      }
    default:
      return state
  }
};

export default reducer;