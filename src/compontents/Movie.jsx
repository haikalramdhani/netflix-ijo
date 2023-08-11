import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useMovie } from "../context/useMovie";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Movie({ movie, ratio }) {
  const {
    posterPath,
    getFavourite,
    favourite,
    removeFavourite,
    isObjectInArray,
  } = useMovie();

  return (
    <div className={`movie ${ratio}`} key={movie.id}>
      <img
        src={
          ratio === "potrait"
            ? posterPath + movie.poster_path
            : posterPath + movie.backdrop_path
        }
        alt=""
      />
      <div className="hover">
        {isObjectInArray(favourite, movie) ? (
          <motion.button
            className="heart heart-red"
            onClick={() => removeFavourite(movie.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaHeart />
          </motion.button>
        ) : (
          <motion.button
            className="heart"
            onClick={() => getFavourite(movie)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaRegHeart />
          </motion.button>
        )}
        <h3 className="title">{movie.title}</h3>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object,
  ratio: PropTypes.string,
};
