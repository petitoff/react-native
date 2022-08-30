import { configureStore } from '@reduxjs/toolkit'
import userListSlice from './reducers/userListSlice'

export const store = configureStore({
  reducer: {
    userList: userListSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
