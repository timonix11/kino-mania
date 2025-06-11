import { Link } from "@tanstack/react-router";
import { KMTextButton } from "./km_text_button";
import { KMMoviePoster } from "../components/km_moviePoster";

export const KMMovieCard = ({
  title,
  posterPath,
  releaseDate,
  id,
  released,
}: {
  title: string;
  posterPath: string;
  releaseDate: string;
  id: number;
  released: boolean;
}) => {
  return (
    <div className="flex flex-col gap-1">
      {released ? (
        <div className="bg-[--color-success] rounded-full font-bold text-black text-xs text-center select-none">
          Вийшло
        </div>
      ) : (
        <div className="bg-[--color-pending] rounded-full font-bold text-black text-xs text-center select-none">
          Очікується
        </div>
      )}
      <div className="relative">
        <KMMoviePoster posterPath={posterPath} weight="w342" />
        <div className="top-0 right-0 bottom-0 left-0 absolute flex flex-col justify-end opacity-0 hover:opacity-100 overflow-hidden duration-300">
          <div className="flex flex-col justify-center bg-black/50 [box-shadow:0px_-5px_10px_10px_rgba(0,0,0,0.5)] p-2">
            <div className="flex flex-col">
              <h1 className="font-bold text-white text-xl leading-none">
                {title}
              </h1>
              <h2 className="font-medium text-white">{releaseDate}</h2>
            </div>
            <Link to="/movie/$movieId" params={{ movieId: id.toString() }}>
              <KMTextButton>Докладніше</KMTextButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
