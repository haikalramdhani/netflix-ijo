import Movie from "../compontents/Movie";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ContentPage({ fetchURL }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, [fetchURL]);

  return (
    <div className="container">
      <div className="movie-container">
        {movie.map((movie) => {
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

export default ContentPage;

ContentPage.propTypes = {
  fetchURL: PropTypes.string,
};
