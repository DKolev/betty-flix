import { useQuery } from '@tanstack/react-query';
import { fetchAllMovieCategories } from '../utils/movieHelpers';

export const useMovieCategories = () => {
  return useQuery({
    queryKey: ['movieCategories'],
    queryFn: fetchAllMovieCategories,
  });
};
