import { combineReducers } from 'redux';
import registrationsReducer from './registrationsReducer';
import authenticationReducer from './authenticationReducer';
import chatActiveReducer from './chatActiveReducer';

export const rootReducer = combineReducers({
  dataRegestration: registrationsReducer,
  authentication: authenticationReducer,
  chatActive: chatActiveReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
