import { combineReducers } from 'redux';
import { UserReducer } from './userReducer';

const RootReducer = combineReducers({
  userReducer: UserReducer,
});

export type ApplicationState = ReturnType<typeof RootReducer>;
export { RootReducer };
