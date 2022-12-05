import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../../utils/config";

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(api.ALL_COUNTRIES);
    return response.data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.error.message;
      });
  },
});

export const countryReducer = countrySlice.reducer;

export const selectAllCountries = (state) => state.countries;
export const selectCountries = (state, { search = "", region = "" }) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
};
