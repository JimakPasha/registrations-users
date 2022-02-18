import {
  AuthenticationActionTypes,
  AuthenticationAction,
} from '../../models/IAuthenticationAction';

const initialState = false;

const authenticationReducer = (
  action: AuthenticationAction,
  state = initialState
): boolean => {
  switch (action.type) {
    case AuthenticationActionTypes.AUTHENTICATION:
      return true;
    case AuthenticationActionTypes.LOGOUT:
      return false;
    default:
      return state;
  }
};

export default authenticationReducer;
