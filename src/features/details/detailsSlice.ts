import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store";
import { Country, Status } from "types";
import * as api from "utils/config";

type DetailsSlice = {
  currentCountry: Country | null;
  neighbors: string[];
  neighborsStatus: Status;
  status: Status;
  error: string | unknown;
};

const initialState: DetailsSlice = {
  currentCountry: null,
  neighbors: [],
  neighborsStatus: "idle",
  status: "idle",
  error: null,
};

export const fetchCountyByName = createAsyncThunk<Country, string>(
  "details/fetchCountyByName",
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.get(api.searchByCountry(name));
      return response.data[0];
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchNeighborCounties = createAsyncThunk<Country[], string[]>(
  "details/fetchNeighborCounties",
  async (border, { rejectWithValue }) => {
    try {
      const response = await axios.get(api.filterByCode(border));
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
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
        state.error = action.payload;
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

// Selectors
export const selectDetails = (state: RootState) => state.details;
