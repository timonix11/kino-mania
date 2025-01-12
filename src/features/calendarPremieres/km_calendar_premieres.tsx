import { useDispatch, useSelector } from "react-redux";
import { getPremieres } from "./calendarPremieresSlice";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { KMFilmCard } from "../../models/km_film_card";
import { KMLoading } from "../../components/km_loading";

export const KMCalendarPremieres = () => {
  const dispatch: AppDispatch = useDispatch();
  const premieres = useSelector(
    (state: any) => state.calendarPremieres.premieres
  );
  const loading = useSelector((state: any) => state.calendarPremieres.loading);
  useEffect(() => {
    dispatch(getPremieres());
  }, []);
  return (
    <div className="flex flex-col gap-3 p-3">
      <h1 className="font-bold text-[--primary-color] text-2xl dark:text-[--secondary-color]">
        Календар прем'єр
      </h1>
      {loading ? <KMLoading /> : null}
      <div className="justify-items-center gap-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 xs:grid-cols-3">
        {premieres.map((item: any, index: number) => (
          <KMFilmCard
            key={index}
            title={item.title}
            posterPath={item.poster_path}
            releaseDate={item.release_date}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
