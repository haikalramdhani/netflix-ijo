import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Hero({ fetchURL }) {
  const [movie, setMovie] = useState("");
  const randomMovie = Math.floor(Math.random() * 20);
  const posterPath = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setMovie(data.results[randomMovie]));
  }, [fetchURL]);

  const truncateString = (str, num) => {
    if (str?.length > 20) {
      return str.slice(0, num) + `...`;
    } else {
      return str;
    }
  };

  return (
    <div className="hero">
      <div className="hero-img">
        <img src={posterPath + movie.backdrop_path} alt="" />
      </div>
      <div className="overlay"></div>
      <div className="hero-text">
        <h1 className="title">{movie.title}</h1>
        <div className="button">
          <button className="watch">Watch</button>
          <button className="favorite">+</button>
        </div>
        <p className="date">Released in {movie.release_date}</p>
        <p className="description">{truncateString(movie.overview, 150)}</p>
      </div>
    </div>
  );
}

Hero.propTypes = {
  fetchURL: PropTypes.string,
};
