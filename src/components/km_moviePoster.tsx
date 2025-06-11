export const KMMoviePoster = ({
  posterPath,
  weight,
}: {
  posterPath: string;
  weight: string;
}) => {
  return (
    <img
      className="rounded-2xl max-h-[513px]"
      src={`https://media.themoviedb.org/t/p/${weight}` + posterPath}
    />
  );
};
