import axios from "axios";

class TheMovieDataBaseService {
  private baseUrl = import.meta.env.VITE_APP_TMDB_BASE_URL;
  private apiKey = import.meta.env.VITE_APP_TMDB_API_KEY;
  private apiReadAccessToken = import.meta.env
    .VITE_APP_TMDB_API_READ_ACCESS_TOKEN;
  // getUpcomingMovies = async () => {
  //   const options = {
  //     method: "GET",
  //     url: `${this.baseUrl}/movie/upcoming`,
  //     params: { language: "uk-UA", page: "1" },
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${this.apiReadAccessToken}`,
  //     },
  //   };
  //   try {
  //     const response = await axios.request(options);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching upcoming movies:", error);
  //     throw error;
  //   }
  // };
  //-----------------------------------------

  //DIVIDE THE FUNCTION INTO SEVERAL FUNCTIONS
  getUpcomingMovies = async () => {
    const oneMonthAway = new Date(
      new Date().setMonth(new Date().getMonth() + 1)
    )
      .toISOString()
      .split("T")[0];
    const oneMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 1))
      .toISOString()
      .split("T")[0];
    // change any[] because eslint rugaetca :)
    // use interface for filteredList
    const filteredList: any[] = [];
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=uk-UA&page=1&region=UA&release_date.gte=${oneMonthAgo}&release_date.lte=${oneMonthAway}&sort_by=popularity.desc`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiReadAccessToken}`,
      },
    };
    try {
      const response = await axios.request(options);
      response.data.results.forEach(
        (item: { released: boolean; title: string; release_date: string }) => {
          item.release_date = item.release_date.split("-").reverse().join(".");
          if (/[а-я]/i.test(item.title)) {
            filteredList.push(item);
          }
          const today = new Date();
          const [day, month, year] = item.release_date.split(".");
          const releaseDate = new Date(`${year}-${month}-${day}`);
          item.released = releaseDate < today;
        }
      );
      filteredList.sort((a, b) => {
        const [dayA, monthA, yearA] = a.release_date.split(".");
        const [dayB, monthB, yearB] = b.release_date.split(".");
        const dateA = new Date(`${yearA}-${monthA}-${dayA}`).getTime();
        const dateB = new Date(`${yearB}-${monthB}-${dayB}`).getTime();
        return dateA - dateB;
      });
      return filteredList;
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      throw error;
    }
  };
  //-----------------------------------------
  // getUpcomingMovies = async () => {
  //   let year = new Date().getFullYear().toString();
  //   const filteredList: any[] = [];
  //   const options = {
  //     method: "GET",
  //     url: `${this.baseUrl}/search/movie`,
  //     params: {
  //       query: "a-z",
  //       language: "uk-UA",
  //       primary_release_year: year,
  //       page: "1",
  //     },
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${this.apiReadAccessToken}`,
  //     },
  //   };
  //   try {
  //     for (let i = 0; i <= 2; i++) {
  //       options.params.primary_release_year = (
  //         Number(options.params.primary_release_year) + i
  //       ).toString();
  //       const response = await axios.request(options);
  //       response.data.results.forEach(
  //         (item: {
  //           released: boolean;
  //           title: string;
  //           release_date: string;
  //         }) => {
  //           item.release_date = item.release_date
  //             .split("-")
  //             .reverse()
  //             .join(".");
  //           if (/[а-я]/i.test(item.title)) {
  //             filteredList.push(item);
  //           }
  //           const today = new Date();
  //           const [day, month, year] = item.release_date.split(".");
  //           const releaseDate = new Date(`${year}-${month}-${day}`);
  //           item.released = releaseDate < today;
  //         }
  //       );
  //     }
  //     filteredList.sort((a, b) => {
  //       const [dayA, monthA, yearA] = a.release_date.split(".");
  //       const [dayB, monthB, yearB] = b.release_date.split(".");
  //       const dateA = new Date(`${yearA}-${monthA}-${dayA}`).getTime();
  //       const dateB = new Date(`${yearB}-${monthB}-${dayB}`).getTime();
  //       return dateA - dateB;
  //     });
  //     console.log("filteredList", filteredList);
  //     return filteredList;
  //   } catch (error) {
  //     console.error("Error fetching upcoming movies:", error);
  //     throw error;
  //   }
  // };
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
    const response = await axios.request(options);
    return response.data;
  };
}

export const theMovieDataBaseService = new TheMovieDataBaseService();
