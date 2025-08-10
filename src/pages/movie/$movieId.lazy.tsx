import { createLazyFileRoute } from "@tanstack/react-router";
import { theMovieDataBaseService } from "../../services/theMovieDataBaseService";
import { useEffect, useState } from "react";
import { KMMoviePoster } from "../../components/km_moviePoster";

export const Route = createLazyFileRoute("/movie/$movieId")({
  component: MoviePage,
});

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  original_title: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  status: string;
  genres: Genre[];
  overview: string;
  poster_path: string;
}

function MoviePage() {
  const { movieId } = Route.useParams();
  const [movie, setMovie] = useState<Movie>({} as Movie);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await theMovieDataBaseService.getMovieById(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div className="flex justify-center max-w-[1175px]">
      <div className="flex gap-3">
        <div>
          <h1 className="text-3xl">{movie.title}</h1>
          <hr />
          <p>Оригінальна назва: {movie.original_title}</p>
          <p>Рейтинг: {movie.vote_average}</p>
          <p>Дата виходу: {movie.release_date}</p>
          <p>Тривалість: {movie.runtime} хв.</p>
          <p>Статус: {movie.status}</p>
          <p>
            Жанр:{" "}
            {movie.genres &&
              movie.genres.map((genre: Genre) => genre.name).join(", ")}
          </p>
          <hr />
          <p>{movie.overview}</p>
        </div>
        <KMMoviePoster posterPath={movie.poster_path} weight="w500" />
      </div>
    </div>
  );
}
