import axios from "axios";

class TheMovieDataBaseService {
  private baseUrl = "https://api.themoviedb.org/3";
  private apiKey = "50f8481dc10672c27559158406e699fa";
  private apiReadAccessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY4NDgxZGMxMDY3MmMyNzU1OTE1ODQwNmU2OTlmYSIsIm5iZiI6MTcyODg1MzgwNS45NTg0MjEsInN1YiI6IjY3MGMzMDk2ZjU4YTkyMDZhYTQxMWViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0v0A4S9NVj1BdpLnDAmRk3Ecpi_543s2WF3Eyz4r50I";
  getUpcomingMovies = async () => {
    const options = {
      method: "GET",
      url: `${this.baseUrl}/movie/upcoming`,
      params: { language: "uk-UA", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiReadAccessToken}`,
      },
    };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     // console.log(response.data);
    //     return response.data;
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    const response = await axios.request(options);
    return response.data;
  };
}

export const theMovieDataBaseService = new TheMovieDataBaseService();
