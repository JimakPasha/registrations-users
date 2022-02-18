import { ChatActionTypes, ChatAction } from '../../models/IChatAction';

const initialState = false;

const chatActiveReducer = (
  action: ChatAction,
  state = initialState
): boolean => {
  switch (action.type) {
    case ChatActionTypes.CHAT_ON:
      return true;
    case ChatActionTypes.CHAT_OFF:
      return false;
    default:
      return state;
  }
};

export default chatActiveReducer;
