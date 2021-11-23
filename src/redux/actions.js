import { RECEIVE_REGISTRATIONS_DATA } from './types';

export function createRegistrationsData(data) {
  return {
    type: RECEIVE_REGISTRATIONS_DATA,
    payload: data,
  };
}
