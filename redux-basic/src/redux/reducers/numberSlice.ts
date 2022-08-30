import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NumberState {
  counter: number
}

const initialState: NumberState = {
  counter: 0
}

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers:{
    incrementCounter(state, action){
      state.counter += 1;
    }
  }
})

export const {incrementCounter} = numberSlice.actions;
export default numberSlice.reducer;