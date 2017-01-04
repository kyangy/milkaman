import { combineReducers } from 'redux';
import user from './user';
import { routerReducer as routing } from 'react-router-redux';
import types from '../types';

const isFetching = ( state = false, action ) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  isFetching,
  user,
  routing
});

export default rootReducer;
