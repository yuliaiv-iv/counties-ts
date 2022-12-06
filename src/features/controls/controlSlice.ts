import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Region } from "types";

type controlsSlice = {
  search: string;
  region: Region | "";
}

const initialState: controlsSlice = {
  search: "",
  region: "",
};

const controlSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | "">) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const controlReducer = controlSlice.reducer;
export const { setRegion, setSearch, clearControls } = controlSlice.actions;

export const selectControls = (state: RootState) => state.controls;
