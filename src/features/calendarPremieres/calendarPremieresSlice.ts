import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { theMovieDataBaseService } from "../../services/theMovieDataBaseService";
import CalendarPremiereMovie from "../../models/interfaces/calendarPremiereMovieInterface";

const initialState: {
  premieres: CalendarPremiereMovie[];
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
    const now = new Date();
    const oneMonthAway = new Date(now);
    oneMonthAway.setMonth(now.getMonth() + 1);

    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(now.getMonth() - 1);

    try {
      const response = await theMovieDataBaseService.getUpcomingMovies(
        oneMonthAway.toISOString().split("T")[0],
        oneMonthAgo.toISOString().split("T")[0]
      );

      const today = now.setHours(0, 0, 0, 0);

      return response.results.map((item: { release_date: string }) => {
        const releaseISO = item.release_date;
        const releaseDate = new Date(releaseISO);
        const formattedDate = releaseISO.split("-").reverse().join(".");
        const released = releaseDate.getTime() < today;

        return {
          ...item,
          release_date: formattedDate,
          released,
        };
      });
    } catch (error) {
      console.error("Error fetching upcoming movies: ", error);
      throw error;
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
      })
      .addCase(getPremieres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default calendarPremieresSlice.reducer;
