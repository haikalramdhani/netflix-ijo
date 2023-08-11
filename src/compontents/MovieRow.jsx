import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import { useMovie } from "../context/useMovie";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MovieRow({ fetchURL, title, link }) {
  const [movie, setMovie] = useState([]);

  const { slideLeft, slideRight } = useMovie();

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, [fetchURL]);

  return (
    <div className="martop">
      <div className="movie-top">
        <h2>{title}</h2>
        <motion.span>
          <Link to={link}>See more..</Link>
        </motion.span>
      </div>
      <div className="movie-item">
        <MdChevronLeft className="react-icon left" onClick={slideLeft} />
        <div className="row-container" id={`slider`}>
          {movie.map((movie) => {
            return <Movie movie={movie} key={movie.id} ratio={"landscape"} />;
          })}
        </div>
        <MdChevronRight className="react-icon right" onClick={slideRight} />
      </div>
    </div>
  );
}

MovieRow.propTypes = {
  fetchURL: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};
