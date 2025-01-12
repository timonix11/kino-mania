import { KMTextButton } from "./km_text_button";

export const KMFilmCard = ({
  title,
  posterPath,
  releaseDate,
}: {
  title: string;
  posterPath: string;
  releaseDate: string;
}) => {
  return (
    <div className="relative">
      <img
        className="rounded-2xl min-w-[200px]"
        src={"https://media.themoviedb.org/t/p/w200" + posterPath}
      />
      <div className="bottom-0 absolute bg-black/25 opacity-0 hover:opacity-100 p-2 rounded-2xl w-full h-full text-white duration-200">
        <div className="flex flex-col justify-end h-full">
          <div className="flex flex-col text-pretty">
            <h1 className="font-bold text-lg leading-none">{title}</h1>
            <h2 className="font-medium">{releaseDate}</h2>
          </div>
          <KMTextButton>Докладніше</KMTextButton>
        </div>
      </div>
    </div>
  );
};
