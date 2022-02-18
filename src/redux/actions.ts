import { AuthenticationActionTypes } from '../models/IAuthenticationAction';
import { ChatActionTypes } from '../models/IChatAction';
import { RegistrationsActionTypes } from '../models/IRegistrationsAction';

export function authentication() {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION,
  };
}

export function logOutUser() {
  return {
    type: AuthenticationActionTypes.LOGOUT,
  };
}

export function registrationsUser(data: any) {
  return {
    type: RegistrationsActionTypes.RECEIVE_REGISTRATIONS_USER,
    payload: data,
  };
}

export function registrationsUsersList(data: Array<any>) {
  return {
    type: RegistrationsActionTypes.RECEIVE_REGISTRATIONS_USERS_LIST,
    payload: data,
  };
}

export function deleteUsersList() {
  return {
    type: RegistrationsActionTypes.DELETE_USERS_LIST,
  };
}

export function checkRegistrationMethod(data: string) {
  return {
    type: RegistrationsActionTypes.REGISTRATION_METHOD,
    payload: data,
  };
}

export function edit(id: string) {
  return {
    type: RegistrationsActionTypes.EDIT,
    payload: id,
  };
}

export function editClean() {
  return {
    type: RegistrationsActionTypes.EDIT_CLEAN,
  };
}

export function editUser(data: any) {
  return {
    type: RegistrationsActionTypes.EDIT_USER,
    payload: data,
  };
}

export function chatOn() {
  return {
    type: ChatActionTypes.CHAT_ON,
  };
}

export function chatOff() {
  return {
    type: ChatActionTypes.CHAT_OFF,
  };
}
