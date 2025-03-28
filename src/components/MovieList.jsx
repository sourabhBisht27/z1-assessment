import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieClick(movie.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieList;
