export enum RegistrationsActionTypes {
  RECEIVE_REGISTRATIONS_USER = 'RECEIVE_REGISTRATIONS_USER',
  RECEIVE_REGISTRATIONS_USERS_LIST = 'RECEIVE_REGISTRATIONS_USERS_LIST',
  DELETE_USERS_LIST = 'DELETE_USERS_LIST',
  REGISTRATION_METHOD = 'REGISTRATION_METHOD',
  EDIT = 'EDIT',
  EDIT_CLEAN = 'EDIT_CLEAN',
  EDIT_USER = 'EDIT_USER',
}

interface ReceiveRegistrationsUserAction {
  type: RegistrationsActionTypes.RECEIVE_REGISTRATIONS_USER;
  payload: any;
}

interface ReceiveRegistrationsUsersListAction {
  type: RegistrationsActionTypes.RECEIVE_REGISTRATIONS_USERS_LIST;
  payload: Array<any>;
}

interface DeleteUsersListAction {
  type: RegistrationsActionTypes.DELETE_USERS_LIST;
}

interface RegistrationMethodAction {
  type: RegistrationsActionTypes.REGISTRATION_METHOD;
  payload: string;
}

interface EditAction {
  type: RegistrationsActionTypes.EDIT;
  payload: string;
}

interface EditCleanAction {
  type: RegistrationsActionTypes.EDIT_CLEAN;
}

interface EditUserAction {
  type: RegistrationsActionTypes.EDIT_USER;
  payload: Array<any>;
}

export type RegistrationsAction =
  | ReceiveRegistrationsUserAction
  | ReceiveRegistrationsUsersListAction
  | DeleteUsersListAction
  | RegistrationMethodAction
  | EditAction
  | EditCleanAction
  | EditUserAction;
