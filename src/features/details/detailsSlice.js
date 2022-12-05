import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../../utils/config";

const initialState = {
  currentCountry: null,
  neighbors: [],
  neighborsStatus: "idle",
  status: "idle",
  error: null,
};

export const fetchCountyByName = createAsyncThunk(
  "details/fetchCountyByName",
  async (name) => {
    const response = await axios.get(api.searchByCountry(name));
    return response.data[0];
  }
);

export const fetchNeighborCounties = createAsyncThunk(
  "details/fetchNeighborCounties",
  async (border) => {
    const response = await axios.get(api.filterByCode(border));
    return response.data;
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountyByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCountyByName.fulfilled, (state, action) => {
        state.status = "received";
        state.currentCountry = action.payload;
      })
      .addCase(fetchCountyByName.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchNeighborCounties.fulfilled, (state, action) => {
        state.neighbors = action.payload.map((country) => country.name);
        state.neighborsStatus = "received";
      })
      .addCase(fetchNeighborCounties.pending, (state) => {
        state.neighborsStatus = "loading";
      })
      .addCase(fetchNeighborCounties.rejected, (state) => {
        state.neighborsStatus = "rejected";
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
export const selectDetails = (state) => state.details;
