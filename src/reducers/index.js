import { combineReducers } from 'redux';
import lights from './lights';
import timer from './timer';

export default combineReducers({
  lights,
  timer
});