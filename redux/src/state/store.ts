import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userListState from '../state/userListSlice';

const rootReducer = combineReducers({
  userList: userListState,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
