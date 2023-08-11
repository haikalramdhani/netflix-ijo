import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const MovieContext = React.createContext();

export function useMovie() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }) {
  const [allMovie, setAllMovie] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const [favourite, setFavourite] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;

  function getFavourite(movie) {
    setFavourite((prevFavourite) => {
      if (prevFavourite.includes(movie)) {
        return Array.from(new Set(prevFavourite.map(JSON.stringify))).map(
          JSON.parse
        );
      }
      return Array.from(
        new Set([movie, ...prevFavourite].map(JSON.stringify))
      ).map(JSON.parse);
    });
  }

  function removeFavourite(id) {
    setFavourite((prevFavourite) => {
      return prevFavourite.filter((fav) => {
        return fav.id !== id;
      });
    });
  }

  const slideLeft = (e) => {
    const slider = document.querySelectorAll("#slider");
    const parent = e.target.parentElement;
    const containerWidth = document
      .querySelector(".movie")
      .getBoundingClientRect().width;
    slider.forEach((slide) => {
      if (slide.parentElement === parent) {
        slide.scrollLeft = slide.scrollLeft - (containerWidth + 20);
      }
    });
  };

  const slideRight = (e) => {
    const slider = document.querySelectorAll("#slider");
    const parent = e.target.parentElement;
    const containerWidth = document
      .querySelector(".movie")
      .getBoundingClientRect().width;
    slider.forEach((slide) => {
      if (slide.parentElement === parent) {
        slide.scrollLeft = slide.scrollLeft + (containerWidth + 20);
      }
    });
  };

  const getAllMovie = async (searchMovies) => {
    const url =
      searchMovies === ""
        ? `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&&query=${searchMovies}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setAllMovie(responseJson.results);
    }
  };

  useEffect(() => {
    getAllMovie(searchMovies);
  }, [searchMovies]);

  const posterPath = "https://image.tmdb.org/t/p/w500/";
  const fetchURL = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  };

  function isObjectInArray(arr, targetObj) {
    return arr.some(
      (obj) => obj.id === targetObj.id && obj.name === targetObj.name
    );
  }

  return (
    <MovieContext.Provider
      value={{
        fetchURL,
        posterPath,
        allMovie,
        searchMovies,
        setSearchMovies,
        getFavourite,
        favourite,
        removeFavourite,
        isObjectInArray,
        slideLeft,
        slideRight,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

MovieProvider.propTypes = {
  children: PropTypes.object,
};
