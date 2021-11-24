import {
  RECEIVE_REGISTRATIONS_PERSONAL,
  RECEIVE_REGISTRATIONS_CARD,
} from './types';

export function createRegistrationsPersonal(data) {
  return {
    type: RECEIVE_REGISTRATIONS_PERSONAL,
    payload: data,
  };
}

export function createRegistrationsCard(data) {
  return {
    type: RECEIVE_REGISTRATIONS_CARD,
    payload: data,
  };
}
