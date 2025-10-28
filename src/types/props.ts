import { Movie } from './movie';

// Component props
export interface MovieCardProps {
  movie: Movie;
  onPress: (movie: Movie) => void;
}

export interface MovieCategoryRowProps {
  title: string;
  movies: Movie[];
  loading?: boolean;
  onMoviePress: (movie: Movie) => void;
}

export interface FeaturedCarouselProps {
  movies: Movie[];
  onMoviePress: (movie: Movie) => void;
}

export interface MovieInfoProps {
  movie: Movie;
}
