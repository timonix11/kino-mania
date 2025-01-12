import { createLazyFileRoute } from "@tanstack/react-router";
import { KMCalendarPremieres } from "../features/calendarPremieres/km_calendar_premieres";

export const Route = createLazyFileRoute("/")({
  component: () => {
    return (
      <div>
        <KMCalendarPremieres />
      </div>
    );
  },
});
