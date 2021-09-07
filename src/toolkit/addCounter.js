import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addCounter = createSlice({
  name: "addCounter",
  initialState,
  reducers: {
    addCount: (state) => {
      state.value += 1;
    },
    removeCount: (state) => {
      state.value -= 1;
    },
  },
});

export const { addCount, removeCount } = addCounter.actions;

export default addCounter.reducer;
