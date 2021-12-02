import { AUTHENTICATION, LOGOUT } from '../types';

const initialState = false;

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

export default authenticationReducer;
