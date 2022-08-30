import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as apiClient from '../../services/apiClient'

export type User = {
  name: string
}

export type UserListState = {
  users: User[]
  loading: boolean
  error: boolean
}

const initialState: UserListState = {
  users: [],
  loading: false,
  error: false,
}

export const fetchUsers = createAsyncThunk<{ users: User[] }, { page: number }>('fetchUsers', async ({ page }) => {
  const response = await apiClient.fetchUsers(page, 10)
  if (response.kind === 'success') {
    return {
      users: response.body ?? [],
    }
  } else {
    throw 'error fetching users'
  }
})

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
})

export default userListSlice.reducer
