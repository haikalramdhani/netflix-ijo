import Movie from "../compontents/Movie";
import { useMovie } from "../context/useMovie";

export default function SearchPage() {
  const { allMovie } = useMovie();

  return (
    <div className="container">
      <div className="movie-container">
        {allMovie.map((movie) => {
          if (movie.poster_path === null) {
            return "";
          } else {
            return <Movie movie={movie} ratio={"potrait"} key={movie.id} />;
          }
        })}
      </div>
    </div>
  );
}
