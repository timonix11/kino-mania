import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { theMovieDataBaseService } from "../services/theMovieDataBaseService";

export const Route = createLazyFileRoute("/")({
  component: () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const test = async () => {
        const data = await theMovieDataBaseService.getUpcomingMovies();
        console.log(data);
        setData(data.results);
      };
      test();
    }, []);
    return (
      <div className="w-full h-full overflow-y-auto">
        {data.map((item: any) => (
          <div key={item.id}>
            {item.title}
            <img
              src={"https://media.themoviedb.org/t/p/w200" + item.poster_path}
            />
          </div>
        ))}
      </div>
    );
  },
});
