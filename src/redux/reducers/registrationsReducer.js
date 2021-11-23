import { RECEIVE_REGISTRATIONS_DATA } from '../types';

const initialState = {
  dataRegestration: [],
};

const registrationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REGISTRATIONS_DATA:
      return {
        ...state,
        dataRegestration: [...state.dataRegestration, action.payload],
      };
    default:
      return state;
  }
};

export default registrationsReducer;
