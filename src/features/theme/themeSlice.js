import { createSlice } from "@reduxjs/toolkit";

const loadStorageTheme = () => {
  const theme = localStorage.getItem("themeMode");
  if (!theme) {
    return "light";
  }
  return theme;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: loadStorageTheme,
  reducers: {
    setTheme: (_, action) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
