import {combineReducers} from 'redux';
import connectionReducer from './connectionReducer';

const reducers = combineReducers({
  connectionReducer,
});

export default reducers;
