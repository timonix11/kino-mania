import { Link } from "@tanstack/react-router";
import { KMTextButton } from "./km_text_button";

export const KMFilmCard = ({
  title,
  posterPath,
  releaseDate,
  id,
}: {
  title: string;
  posterPath: string;
  releaseDate: string;
  id: number;
}) => {
  return (
    <div className="relative">
      <img
        className="rounded-2xl"
        src={"https://media.themoviedb.org/t/p/w342" + posterPath}
      />
      <div className="top-0 right-0 bottom-0 left-0 absolute flex flex-col justify-end opacity-0 hover:opacity-100 duration-300 overflow-hidden">
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
  );
};
