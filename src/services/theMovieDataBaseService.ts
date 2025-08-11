import axios from "axios";

class TheMovieDataBaseService {
  private baseUrl = import.meta.env.VITE_APP_TMDB_BASE_URL;
  // private apiKey = import.meta.env.VITE_APP_TMDB_API_KEY;
  private apiReadAccessToken = import.meta.env
    .VITE_APP_TMDB_API_READ_ACCESS_TOKEN;

  getUpcomingMovies = async (oneMonthAway: string, oneMonthAgo: string) => {
    const options = {
      method: "GET",
      url: `${this.baseUrl}/discover/movie`,
      params: {
        include_adult: false,
        include_video: false,
        language: "uk-UA",
        page: 1,
        region: "UA",
        "release_date.gte": oneMonthAgo,
        "release_date.lte": oneMonthAway,
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiReadAccessToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch upcoming movies", error);
      throw error;
    }
  };

  getMovieById = async (movieId: string) => {
    const options = {
      method: "GET",
      url: `${this.baseUrl}/movie/${movieId}`,
      params: { language: "uk-UA" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiReadAccessToken}`,
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("Failed to get movie by id", error);
      throw error;
    }
  };
}

export const theMovieDataBaseService = new TheMovieDataBaseService();
