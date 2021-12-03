import {
  AUTHENTICATION,
  LOGOUT,
  RECEIVE_REGISTRATIONS_USER,
  RECEIVE_REGISTRATIONS_USERS_LIST,
  DELETE_USERS_LIST,
  REGISTRATION_METHOD,
  EDIT,
  EDIT_CLEAN,
  EDIT_USER,
} from './types';

export function authentication() {
  return {
    type: AUTHENTICATION,
  };
}

export function logOutUser() {
  return {
    type: LOGOUT,
  };
}

export function registrationsUser(data) {
  return {
    type: RECEIVE_REGISTRATIONS_USER,
    payload: data,
  };
}

export function registrationsUsersList(data) {
  return {
    type: RECEIVE_REGISTRATIONS_USERS_LIST,
    payload: data,
  };
}

export function deleteUsersList() {
  return {
    type: DELETE_USERS_LIST,
  };
}

export function checkRegistrationMethod(data) {
  return {
    type: REGISTRATION_METHOD,
    payload: data,
  };
}

export function edit(id) {
  return {
    type: EDIT,
    payload: id,
  };
}

export function editClean() {
  return {
    type: EDIT_CLEAN,
  };
}

export function editUser(data) {
  return {
    type: EDIT_USER,
    payload: data,
  };
}
