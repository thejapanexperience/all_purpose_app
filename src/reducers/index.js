import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import users from './users'
import selections from './selections'

const rootReducer = combineReducers({
  routing: routerReducer,
  users,
  selections
});

export default rootReducer;
