import { combineReducers } from 'redux';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  sequence: cardReducer,
});

export default rootReducer;
