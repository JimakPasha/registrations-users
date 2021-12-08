import { combineReducers } from 'redux';
import registrationsReducer from './registrationsReducer';
import authenticationReducer from './authenticationReducer';
import chatActiveReducer from './chatActiveReducer';

const rootReducer = combineReducers({
  dataRegestration: registrationsReducer,
  authentication: authenticationReducer,
  chatActive: chatActiveReducer,
});

export default rootReducer;
