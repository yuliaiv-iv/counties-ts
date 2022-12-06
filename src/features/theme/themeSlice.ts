import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

const loadStorageTheme = () => {
  const theme = localStorage.getItem("themeMode");
  if (!theme) {
    return "light";
  }
  return theme;
};

export type Theme = "light" | "dark";


const themeSlice = createSlice({
  name: "theme",
  initialState: loadStorageTheme as unknown as Theme,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

// Selectors
export const selectTheme = (state: RootState) => state.theme
