import {
  RECEIVE_REGISTRATIONS_USER,
  RECEIVE_REGISTRATIONS_USERS_LIST,
  REGISTRATION_METHOD,
  EDIT,
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
    case REGISTRATION_METHOD:
      return { ...state, registrationMethod: action.payload };
    case EDIT:
      return {
        ...state,
        ...state.isEdit,
        isEdit: true,
        ...state.editId,
        editId: action.payload,
      };
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
