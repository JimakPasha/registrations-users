import {
  RECEIVE_REGISTRATIONS_USER,
  RECEIVE_REGISTRATIONS_USERS_LIST,
  DELETE_USERS_LIST,
  REGISTRATION_METHOD,
  EDIT,
  EDIT_CLEAN,
  EDIT_USER,
} from '../types';

const initialState = {
  registrationMethod: '',
  dataRegestration: {},
  dataRegestrationUsersList: [],
  isEdit: false,
  editId: '',
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
    case DELETE_USERS_LIST:
      return {
        ...state,
        dataRegestrationUsersList: [],
      };
    case REGISTRATION_METHOD:
      return { ...state, registrationMethod: action.payload };
    case EDIT:
      return {
        ...state,
        isEdit: true,
        editId: action.payload,
      };
    case EDIT_CLEAN:
      return { ...state, isEdit: false };
    case EDIT_USER:
      return {
        ...state,
        dataRegestrationUsersList: [...action.payload],
      };
    default:
      return state;
  }
};

export default registrationsReducer;
