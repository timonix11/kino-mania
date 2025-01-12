import { createLazyFileRoute } from "@tanstack/react-router";
import { theMovieDataBaseService } from "../../services/theMovieDataBaseService";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/movie/$movieId")({
  component: () => {
    const { movieId } = Route.useParams();
    const [movie, setMovie] = useState<any>({});
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const data = await theMovieDataBaseService.getMovieById(movieId);
          setMovie(data);
          console.log(data.genres);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMovie();
    }, []);
    return (
      <div className="flex flex-col">
        <div className="text-2xl">{movie.title}</div>
        <div>{movie.overview}</div>
        <div>
          Жанр:{" "}
          {movie.genres &&
            movie.genres.map((genre: any) => genre.name).join(", ")}
        </div>
      </div>
    );
  },
});
