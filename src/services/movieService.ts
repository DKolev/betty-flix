import { Movie, OMDBSearchResponse, OMDBMovie } from '../types/movie';
import { API_ENDPOINTS } from '../constants/api';
import { API_RESPONSE, ERROR_MESSAGES } from '../constants/strings';

// helper function to normalize OMDB movie to our Movie type
const normalizeOMDBMovie = (omdbMovie: OMDBMovie): Movie => ({
  id: omdbMovie.imdbID,
  title: omdbMovie.Title,
  year: omdbMovie.Year,
  poster: omdbMovie.Poster !== API_RESPONSE.notAvailable ? omdbMovie.Poster : '',
  type: omdbMovie.Type,
});

export const searchMovies = async (searchTerm: string): Promise<Movie[]> => {
  const url = API_ENDPOINTS.searchByTitle(searchTerm);
  const response = await fetch(url);
  const data: OMDBSearchResponse = await response.json();
  
  if (data.Response === API_RESPONSE.false) {
    throw new Error(ERROR_MESSAGES.noMoviesFound);
  }
  
  return data.Search.map(normalizeOMDBMovie);
};
