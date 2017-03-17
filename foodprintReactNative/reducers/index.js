import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  welcome: require('./default').default
});

export default rootReducer;
