import { useDispatch, useSelector } from "react-redux";
import { getPremieres } from "./calendarPremieresSlice";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { KMFilmCard } from "../../models/km_film_card";

export const KMCalendarPremieres = () => {
  const dispatch: AppDispatch = useDispatch();
  const premieres = useSelector(
    (state: any) => state.calendarPremieres.premieres
  );
  useEffect(() => {
    dispatch(getPremieres());
  }, []);
  return (
    <>
      <h1>Calendar premieres</h1>
      <div className="flex flex-wrap gap-4">
        {premieres.map((item: any, index: number) => (
          <KMFilmCard
            key={index}
            title={item.title}
            posterPath={item.poster_path}
            releaseDate={item.release_date}
          />
        ))}
      </div>
    </>
  );
};
