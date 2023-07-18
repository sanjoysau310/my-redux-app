import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, showCount: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value=0;
    },
    toggleCounter(state) {
      state.showCount = !state.showCount;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
