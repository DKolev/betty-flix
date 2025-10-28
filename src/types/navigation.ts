import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Movie } from './movie';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {
    movie: Movie;
  };
};

// Screen navigation prop types
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export interface MovieDetailsScreenProps {
  route: RouteProp<RootStackParamList, 'MovieDetails'>;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}