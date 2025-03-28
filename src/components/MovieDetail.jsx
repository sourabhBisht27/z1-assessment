import { useEffect, useState } from "react";
import { fetchMovies } from "../api/omdbApi";

const MovieDetail = ({ movieId, onBack }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies(movieId).then(setMovie);
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
      <p>{movie.Plot}</p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
    </div>
  );
};

export default MovieDetail;
