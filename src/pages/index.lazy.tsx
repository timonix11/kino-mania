import { createLazyFileRoute } from "@tanstack/react-router";
import { KMCalendarPremieres } from "../features/calendarPremieres/km_calendar_premieres";

export const Route = createLazyFileRoute("/")({
  component: () => {
    return (
      <div className="flex flex-col gap-3">
        <div></div>
        <div className="flex justify-center px-3">
          <p className="font-bold text-[--primary-color] dark:text-[--secondary-color] text-2xl">
            Дивись кіно в день офіційної прем'єри тільки в кінотеатрах KINO
            MANIA
          </p>
        </div>
        <hr className="border-[rgb(228,228,231)] dark:border-[rgb(39,39,42)] border-t" />
        <KMCalendarPremieres />
      </div>
    );
  },
});
