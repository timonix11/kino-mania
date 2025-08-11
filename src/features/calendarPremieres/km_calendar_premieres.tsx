import { useDispatch, useSelector } from "react-redux";
import { getPremieres } from "./calendarPremieresSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useMemo } from "react";
import { KMMovieCard } from "../../models/km_movie_card";
import { KMLoading } from "../../components/km_loading";
import CalendarPremiereMovie from "../../models/interfaces/calendarPremiereMovieInterface";

export const KMCalendarPremieres = () => {
  const dispatch: AppDispatch = useDispatch();
  const premieres = useSelector(
    (state: RootState) => state.calendarPremieres.premieres
  );
  const loading = useSelector(
    (state: RootState) => state.calendarPremieres.loading
  );
  const sortedPremieres = useMemo(() => {
    return [...premieres].sort((a, b) => {
      const [dayA, monthA, yearA] = a.release_date.split(".");
      const [dayB, monthB, yearB] = b.release_date.split(".");
      const dateA = new Date(`${yearA}-${monthA}-${dayA}`).getTime();
      const dateB = new Date(`${yearB}-${monthB}-${dayB}`).getTime();
      return dateA - dateB;
    });
  }, [premieres]);
  useEffect(() => {
    dispatch(getPremieres());
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-3 px-3">
      <h1 className="font-bold text-[--primary-color] dark:text-[--secondary-color] text-2xl">
        Календар прем'єр
      </h1>

      <p>
        Якщо фільм який ви хочете подивитись вийшов, то ви можете перейти до{" "}
        <a
          className="link-border font-semibold text-[--primary-color] dark:text-[--secondary-color]"
          href="#"
        >
          розкладу сеансів
        </a>{" "}
        та дізнатись коли він буде y показі.
      </p>

      {loading ? <KMLoading /> : null}
      <div className="justify-items-center gap-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {sortedPremieres.map((item: CalendarPremiereMovie, index: number) => (
          <KMMovieCard
            key={index}
            title={item.title}
            posterPath={item.poster_path}
            releaseDate={item.release_date}
            id={item.id}
            released={item.released}
          />
        ))}
      </div>
    </div>
  );
};
