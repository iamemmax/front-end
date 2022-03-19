import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchSeries } from "./movieService";

export const getMovies = createAsyncThunk(
  "product/fetch",
  async (query, thunkAPI) => {
    try {
      return await fetchMovies(query);
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
export const getShow = createAsyncThunk(
  "product/fetchseries",
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
  isLoading: false,
  isSuccess: false,
  movies: {},
  message: "",
  isError: false,
};

const FetchMovies = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies = action.payload;
      })

      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        (state.movies = null)((state.message = action.payload));
      });
  },
});

export default FetchMovies.reducer;
