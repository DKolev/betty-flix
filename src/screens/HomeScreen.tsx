import { View, Text, StyleSheet, FlatList, ActivityIndicator, ListRenderItem } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import { Movie } from '../types/movie';
import { HomeScreenNavigationProp } from '../types/navigation';
import { useMovieCategories } from '../hooks/useMovieCategories';
import colors from '../constants/colors';
import { APP_NAME, CATEGORY_TITLES, UI_MESSAGES } from '../constants/strings';
import FeaturedCarousel from '../components/FeaturedCarousel';
import MovieCategoryRow from '../components/MovieCategoryRow';

interface CategoryItem {
  id: string;
  title: string;
  movies: Movie[];
}

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { data: categories, isLoading, isError, error } = useMovieCategories();

  const handleMoviePress = useCallback((movie: Movie) => {
    navigation.navigate('MovieDetails', { movie });
  }, [navigation]);

  const categoryList = useMemo<CategoryItem[]>(() => {
    if (!categories) return [];
    
    return [
      { id: 'trending', title: CATEGORY_TITLES.trendingNow, movies: categories.trending },
      { id: 'topRated', title: CATEGORY_TITLES.topRated, movies: categories.topRated },
      { id: 'action', title: CATEGORY_TITLES.actionMovies, movies: categories.actionMovies },
      { id: 'sciFi', title: CATEGORY_TITLES.sciFiMovies, movies: categories.sciFiMovies },
      { id: 'comedy', title: CATEGORY_TITLES.comedyMovies, movies: categories.comedyMovies },
      { id: 'thriller', title: CATEGORY_TITLES.thrillerMovies, movies: categories.thrillerMovies },
      { id: 'horror', title: CATEGORY_TITLES.horrorMovies, movies: categories.horrorMovies },
      { id: 'drama', title: CATEGORY_TITLES.dramaMovies, movies: categories.dramaMovies },
      { id: 'animation', title: CATEGORY_TITLES.animationMovies, movies: categories.animationMovies },
    ];
  }, [categories]);

  const renderCategoryRow: ListRenderItem<CategoryItem> = useCallback(({ item }) => (
    <MovieCategoryRow 
      title={item.title} 
      movies={item.movies} 
      loading={isLoading} 
      onMoviePress={handleMoviePress} 
    />
  ), [isLoading, handleMoviePress]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.netflixRed} />
          <Text style={styles.loadingText}>{UI_MESSAGES.loadingMovies}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error instanceof Error ? error.message : UI_MESSAGES.error}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!categories) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categoryList}
        renderItem={renderCategoryRow}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.logo}>{APP_NAME}</Text>
            </View>
            {categories && <FeaturedCarousel movies={categories.featured} onMoviePress={handleMoviePress} />}
          </>
        }
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={3}
        windowSize={5}
        initialNumToRender={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: colors.black,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.netflixRed,
    letterSpacing: 2,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: colors.white,
    fontSize: 18,
    marginTop: 16,
    fontWeight: '600',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: colors.netflixRed,
    fontSize: 16,
    textAlign: 'center',
  },
});