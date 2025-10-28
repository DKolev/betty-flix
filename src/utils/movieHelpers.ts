import { searchMovies } from '../services/movieService';
import { MovieCategories } from '../types/movie';
import { CATEGORY_SEARCH_TERMS } from '../constants/strings';

export const fetchAllMovieCategories = async (): Promise<MovieCategories> => {
  const [
    featuredData,
    trendingData,
    topRatedData,
    actionData,
    comedyData,
    horrorData,
    sciFiData,
    dramaData,
    thrillerData,
    animationData
  ] = await Promise.all([
    searchMovies(CATEGORY_SEARCH_TERMS.featured),
    searchMovies(CATEGORY_SEARCH_TERMS.trending),
    searchMovies(CATEGORY_SEARCH_TERMS.topRated),
    searchMovies(CATEGORY_SEARCH_TERMS.action),
    searchMovies(CATEGORY_SEARCH_TERMS.comedy),
    searchMovies(CATEGORY_SEARCH_TERMS.horror),
    searchMovies(CATEGORY_SEARCH_TERMS.sciFi),
    searchMovies(CATEGORY_SEARCH_TERMS.drama),
    searchMovies(CATEGORY_SEARCH_TERMS.thriller),
    searchMovies(CATEGORY_SEARCH_TERMS.animation),
  ]);

  return {
    featured: featuredData,
    trending: trendingData,
    topRated: topRatedData,
    actionMovies: actionData,
    comedyMovies: comedyData,
    horrorMovies: horrorData,
    sciFiMovies: sciFiData,
    dramaMovies: dramaData,
    thrillerMovies: thrillerData,
    animationMovies: animationData,
  };
};