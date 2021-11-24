import {
  RECEIVE_REGISTRATIONS_PERSONAL,
  RECEIVE_REGISTRATIONS_CARD,
} from '../types';

const initialState = {
  dataRegestration: [],
};

const registrationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REGISTRATIONS_PERSONAL:
      return {
        ...state,
        dataRegestration: [...state.dataRegestration, action.payload],
      };
    case RECEIVE_REGISTRATIONS_CARD:
      return {
        ...state,
        dataRegestration: [
          Object.assign(...state.dataRegestration, action.payload),
        ],
      };
    default:
      return state;
  }
};

export default registrationsReducer;
