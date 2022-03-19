import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSeries } from "./movieService";

export const getSeries = createAsyncThunk(
  "movies/fetchSeries",
  async (query, thunkAPI) => {
    try {
      return await fetchSeries(query);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  isSuccess: false,
  message: "",
  isError: false,
  show: {},
};

const FetchShows = createSlice({
  name: "fetchSeries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSeries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.show = action.payload;
      })

      .addCase(getSeries.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        (state.show = null)((state.message = action.payload));
      });
  },
});

export default FetchShows.reducer;
