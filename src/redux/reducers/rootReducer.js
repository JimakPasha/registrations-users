import { combineReducers } from 'redux';
import registrationsReducer from './registrationsReducer';

const rootReducer = combineReducers({
  dataRegestration: registrationsReducer,
});

export default rootReducer;
