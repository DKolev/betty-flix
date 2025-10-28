import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MovieCardProps } from '../types/props';
import colors from '../constants/colors';

function MovieCard({ movie, onPress }: MovieCardProps) {
  return (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => onPress(movie)}
    >
      {movie.poster ? (
        <Image source={{ uri: movie.poster }} style={styles.moviePoster} />
      ) : (
        <View style={styles.moviePosterPlaceholder}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default React.memo(MovieCard);

const styles = StyleSheet.create({
  movieCard: {
    marginRight: 15,
  },
  moviePoster: {
    width: 120,
    height: 180,
    borderRadius: 4,
  },
  moviePosterPlaceholder: {
    width: 120,
    height: 180,
    backgroundColor: colors.darkGray,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});