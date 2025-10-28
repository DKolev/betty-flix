import { StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MovieDetailsScreenProps } from '../types/navigation';
import MovieInfo from '../components/MovieInfo';
import colors from '../constants/colors';

export default function MovieDetailsScreen({ route }: MovieDetailsScreenProps) {
  const { movie } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} >
        {movie.poster && (
          <Image source={{ uri: movie.poster }} style={styles.poster} resizeMode="contain" />
        )}
        <MovieInfo movie={movie} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  poster: {
    width: '100%',
    height: 500,
    backgroundColor: colors.black,
  },
});