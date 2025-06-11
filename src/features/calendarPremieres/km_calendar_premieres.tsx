import { useDispatch, useSelector } from "react-redux";
import { getPremieres } from "./calendarPremieresSlice";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { KMMovieCard } from "../../models/km_movie_card";
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
        та дізнатись коли він буде у показі.
      </p>

      {loading ? <KMLoading /> : null}
      <div className="justify-items-center gap-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {premieres.map((item: any, index: number) => (
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
