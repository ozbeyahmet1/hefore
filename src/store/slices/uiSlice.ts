import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSearchModal: (state) => {
      state.value = true;
    },
    closeSearchModal: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openSearchModal, closeSearchModal } = uiSlice.actions;

export default uiSlice.reducer;
