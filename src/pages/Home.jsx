import React, { useState } from "react";
import { fetchMovies } from "../api/omdbApi";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (term) => {
    setSearchTerm(term);
    const results = await fetchMovies(term);
    setMovies(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Home;
