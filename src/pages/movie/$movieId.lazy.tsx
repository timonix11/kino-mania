import { createLazyFileRoute } from "@tanstack/react-router";
import { theMovieDataBaseService } from "../../services/theMovieDataBaseService";
import { useEffect, useState } from "react";
import { KMMoviePoster } from "../../components/km_moviePoster";

export const Route = createLazyFileRoute("/movie/$movieId")({
  component: () => {
    const { movieId } = Route.useParams();
    const [movie, setMovie] = useState<any>({});
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
    }, []);
    return (
      <div className="flex justify-center max-w-[1175px]">
        {/* <div className="text-2xl">{movie.title}</div>
        <div>{movie.overview}</div>
        <div>
          Жанр:{" "}
          {movie.genres &&
            movie.genres.map((genre: any) => genre.name).join(", ")}
        </div> */}
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
                movie.genres.map((genre: any) => genre.name).join(", ")}
            </p>
            <hr />
            <p>{movie.overview}</p>
          </div>
          <KMMoviePoster posterPath={movie.poster_path} weight="w500" />
        </div>
      </div>
    );
  },
});
