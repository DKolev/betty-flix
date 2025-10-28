import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MovieInfoProps } from '../types/props';
import colors from '../constants/colors';

// Mock data helper - same for all movies for now
const getMockMovieDetails = () => ({
  genre: 'Action, Adventure, Sci-Fi',
  cast: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
  description: 'An epic adventure that brings together Earth\'s Mightiest Heroes to face their greatest threat yet. When an unexpected enemy emerges, they must work together to save the world from destruction.',
  rating: 4.2, // out of 5
});

export default function MovieInfo({ movie }: MovieInfoProps) {
  const mockDetails = useMemo(() => getMockMovieDetails(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      
      <View style={styles.metaRow}>
        <Text style={styles.year}>{movie.year}</Text>
        <Text style={styles.separator}>·</Text>
        <Text style={styles.type}>{movie.type.toUpperCase()}</Text>
        <Text style={styles.separator}>·</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {mockDetails.rating}/5</Text>
        </View>
      </View>

      <Text style={styles.genre}>{mockDetails.genre}</Text>
      
      <Text style={styles.description}>{mockDetails.description}</Text>
      
      <View style={styles.castSection}>
        <Text style={styles.castLabel}>Cast</Text>
        <Text style={styles.cast}>{mockDetails.cast}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  year: {
    fontSize: 16,
    color: colors.lightGray,
  },
  separator: {
    fontSize: 16,
    color: colors.mediumGray,
    marginHorizontal: 8,
  },
  type: {
    fontSize: 14,
    color: colors.mediumGray,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ratingContainer: {
    marginLeft: 4,
  },
  rating: {
    fontSize: 16,
    color: colors.gold,
    fontWeight: '600',
  },
  genre: {
    fontSize: 16,
    color: colors.lightGray,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 24,
    marginBottom: 24,
  },
  castSection: {
    marginTop: 8,
  },
  castLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  cast: {
    fontSize: 16,
    color: colors.lightGray,
    lineHeight: 22,
  },
});
