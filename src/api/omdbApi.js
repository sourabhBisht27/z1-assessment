const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_API_URL;

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await fetch(
      `${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      return data.Search;
    } else {
      console.error("No movies found:", data.Error);
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
