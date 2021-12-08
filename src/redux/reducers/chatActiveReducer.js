import { CHAT_ON, CHAT_OFF } from '../types';

const initialState = false;

const chatActiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_ON:
      return true;
    case CHAT_OFF:
      return false;
    default:
      return state;
  }
};

export default chatActiveReducer;
