export interface OMDBMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OMDBSearchResponse {
  Search: OMDBMovie[];
  totalResults: string;
  Response: string;
}

// Internal Movie type (normalized from OMDB search results)
export interface Movie {
  id: string;        // from imdbID
  title: string;     // from Title
  year: string;      // from Year
  poster: string;    // from Poster
  type: string;      // from Type (movie, series, episode)
}

export interface MovieCategories {
  featured: Movie[];
  trending: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  sciFiMovies: Movie[];
  dramaMovies: Movie[];
  thrillerMovies: Movie[];
  animationMovies: Movie[];
}