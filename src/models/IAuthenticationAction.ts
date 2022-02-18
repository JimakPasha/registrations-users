export enum AuthenticationActionTypes {
  AUTHENTICATION = 'AUTHENTICATION',
  LOGOUT = 'LOGOUT',
}

interface AuthAction {
  type: AuthenticationActionTypes.AUTHENTICATION;
}

interface LogoutAction {
  type: AuthenticationActionTypes.LOGOUT;
}

export type AuthenticationAction = AuthAction | LogoutAction;
