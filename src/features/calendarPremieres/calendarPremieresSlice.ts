import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { theMovieDataBaseService } from "../../services/theMovieDataBaseService";

const initialState: {
  premieres: any[];
  loading: boolean;
  error: unknown;
} = {
  premieres: [],
  loading: false,
  error: null,
};

export const getPremieres = createAsyncThunk(
  "calendarPremieres/getPremieres",
  async (_, { rejectWithValue }) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await theMovieDataBaseService.getUpcomingMovies();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const calendarPremieresSlice = createSlice({
  name: "calendarPremieres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPremieres.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPremieres.fulfilled, (state, action) => {
        state.loading = false;
        state.premieres = action.payload;
        console.log(action.payload);
      })
      .addCase(getPremieres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default calendarPremieresSlice.reducer;
