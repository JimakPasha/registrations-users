import {
  RECEIVE_REGISTRATIONS_USER,
  RECEIVE_REGISTRATIONS_USERS_LIST,
  REGISTRATION_METHOD,
  EDIT,
  EDIT_USER,
} from './types';

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

export function editUser(data) {
  return {
    type: EDIT_USER,
    payload: data,
  };
}
