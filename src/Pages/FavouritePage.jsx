import Movie from "../compontents/Movie";
import { useMovie } from "../context/useMovie";

export default function FavouritePage() {
  const { favourite } = useMovie();
  return (
    <div className="container">
      <div className="movie-container">
        {favourite.length === 0 ? (
          <h1>Add Movie</h1>
        ) : (
          favourite.map((movie) => {
            return <Movie movie={movie} key={movie.id} ratio="potrait" />;
          })
        )}
      </div>
    </div>
  );
}
