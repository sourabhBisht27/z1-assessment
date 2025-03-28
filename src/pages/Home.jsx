import React, { useState } from "react";
import { fetchMovies } from "../api/omdbApi";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import MovieDetail from "../components/MovieDetail";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null); // Track selected movie

  const handleSearch = async (term) => {
    setSearchTerm(term);
    const results = await fetchMovies(term);
    setMovies(results);
  };

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleBack = () => {
    setSelectedMovieId(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {selectedMovieId ? (
        <MovieDetail
          movieId={selectedMovieId}
          onBack={handleBack}
        />
      ) : movies.length > 0 ? (
        <MovieList
          movies={movies}
          onMovieClick={handleMovieClick}
        />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Home;
