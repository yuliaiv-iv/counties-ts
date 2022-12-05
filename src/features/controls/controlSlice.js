import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  region: "",
};

const controlSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const controlReducer = controlSlice.reducer;
export const { setRegion, setSearch, clearControls } = controlSlice.actions;

export const selectControls = (state) => state.controls;
