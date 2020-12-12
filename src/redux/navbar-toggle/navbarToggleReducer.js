import {TOGGLE_NAVBAR} from "./actionTypes";

const initialState = {
  isNavbarShowing: true
};

const reducer = (state = initialState, action) => {
  if (action.type === TOGGLE_NAVBAR) {
    return {
      ...state,
      isNavbarShowing: !state.isNavbarShowing
    };
  } else {
    return state
  }
};

export default reducer;