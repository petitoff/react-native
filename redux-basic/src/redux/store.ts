import { configureStore } from '@reduxjs/toolkit';
import numberSlice from './reducers/numberSlice';

export const store = configureStore({
  reducer: {
    numberSlice: numberSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;