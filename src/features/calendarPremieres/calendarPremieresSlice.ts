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
  async () => {
    try {
      const response = await theMovieDataBaseService.getUpcomingMovies();
      return response;
    } catch (error) {
      console.error("Error fetching upcoming movies: ", error);
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
        state.premieres = action.payload ?? [];
        console.log(action.payload);
      })
      .addCase(getPremieres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default calendarPremieresSlice.reducer;
