import { useEffect, useState } from "react";
import { fetchMovies } from "../api/omdbApi";

const MovieDetail = ({ movieId, onBack }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await fetchMovies(movieId, true); // Fetch by ID
      setMovie(movieData);
    };

    getMovie();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <button onClick={onBack}>Back</button>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <p>
        <strong>Plot:</strong> {movie.Plot || "No plot available"}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors || "No actors available"}
      </p>
    </div>
  );
};

export default MovieDetail;
