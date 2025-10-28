import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MovieCategoryRowProps } from '../types/props';
import colors from '../constants/colors';
import { UI_MESSAGES } from '../constants/strings';
import MovieCard from './MovieCard';
import { Movie } from '../types/movie';

export default function MovieCategoryRow({ title, movies, loading, onMoviePress }: MovieCategoryRowProps) {
  const renderItem = useCallback(({ item }: { item: Movie }) => (
    <MovieCard
      movie={item}
      onPress={onMoviePress}
    />
  ), [onMoviePress]);

  return (
    <View style={styles.categoryRow}>
      <Text style={styles.categoryTitle}>{title}</Text>
      {movies.length === 0 && !loading ? (
        <Text style={styles.noMovies}>{UI_MESSAGES.noMoviesAvailable}</Text>
      ) : (
        <FlatList
          data={movies}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.movieList}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryRow: {
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 20,
    marginBottom: 15,
  },
  movieList: {
    paddingLeft: 20,
  },
  noMovies: {
    color: colors.lightGray,
    fontSize: 14,
    marginLeft: 20,
  },
});
