export enum ChatActionTypes {
  CHAT_ON = 'CHAT_ON',
  CHAT_OFF = 'CHAT_OFF',
}

interface ChatOnAction {
  type: ChatActionTypes.CHAT_ON;
}

interface ChatOffAction {
  type: ChatActionTypes.CHAT_OFF;
}

export type ChatAction = ChatOnAction | ChatOffAction;
