import {
  RegistrationsActionTypes,
  RegistrationsAction,
} from '../../models/IRegistrationsAction';
import { IregistrationsReducer } from '../../models/IregistrationsReducer';

const initialState: IregistrationsReducer = {
  registrationMethod: '',
  dataRegestration: {},
  dataRegestrationUsersList: [],
  isEdit: false,
  editId: '',
};

const registrationsReducer = (
  action: RegistrationsAction,
  state = initialState
): IregistrationsReducer => {
  switch (action.type) {
    case RegistrationsActionTypes.RECEIVE_REGISTRATIONS_USER:
      return {
        ...state,
        dataRegestration: { ...state.dataRegestration, ...action.payload },
      };
    case RegistrationsActionTypes.RECEIVE_REGISTRATIONS_USERS_LIST:
      return {
        ...state,
        dataRegestrationUsersList: [
          ...state.dataRegestrationUsersList,
          ...action.payload,
        ],
      };
    case RegistrationsActionTypes.DELETE_USERS_LIST:
      return {
        ...state,
        dataRegestrationUsersList: [],
      };
    case RegistrationsActionTypes.REGISTRATION_METHOD:
      return { ...state, registrationMethod: action.payload };
    case RegistrationsActionTypes.EDIT:
      return {
        ...state,
        isEdit: true,
        editId: action.payload,
      };
    case RegistrationsActionTypes.EDIT_CLEAN:
      return { ...state, isEdit: false };
    case RegistrationsActionTypes.EDIT_USER:
      return {
        ...state,
        dataRegestrationUsersList: [...action.payload],
      };
    default:
      return state;
  }
};

export default registrationsReducer;
