import {
  RECEIVE_REGISTRATIONS_USER,
  RECEIVE_REGISTRATIONS_USERS_LIST,
  REGISTRATION_METHOD,
} from '../types';

const initialState = {
  registrationMethod: '',
  dataRegestration: {},
  dataRegestrationUsersList: [],
};

const registrationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REGISTRATIONS_USER:
      return {
        ...state,
        dataRegestration: { ...state.dataRegestration, ...action.payload },
      };
    case RECEIVE_REGISTRATIONS_USERS_LIST:
      return {
        ...state,
        dataRegestrationUsersList: [
          ...state.dataRegestrationUsersList,
          ...action.payload,
        ],
      };
    case REGISTRATION_METHOD:
      return { ...state, registrationMethod: action.payload };
    default:
      return state;
  }
};

export default registrationsReducer;
