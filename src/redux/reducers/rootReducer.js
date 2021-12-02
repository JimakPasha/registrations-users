import { combineReducers } from 'redux';
import registrationsReducer from './registrationsReducer';
import authenticationReducer from './authenticationReducer';

const rootReducer = combineReducers({
  dataRegestration: registrationsReducer,
  authentication: authenticationReducer,
});

export default rootReducer;
