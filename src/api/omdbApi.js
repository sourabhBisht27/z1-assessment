const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_API_URL;

export const fetchMovies = async (query, isId = false) => {
  const url = `${BASE_URL}?${
    isId ? `i=${query}` : `s=${query}`
  }&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      return isId ? data : data.Search;
    } else {
      return null; // No movies found
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};
