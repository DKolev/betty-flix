import React, { useEffect, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native';
import { CarouselItemProps, FeaturedCarouselProps } from '../types/props';
import colors from '../constants/colors';
import { Movie } from '../types/movie';

const AUTO_SCROLL_INTERVAL = 5000;

const CarouselItem = ({ item, onPress, screenWidth }: CarouselItemProps) => {
  const carouselWidth = screenWidth * (2 / 3);
  
  return (
    <TouchableOpacity
      style={[styles.carouselItem, { width: screenWidth }]}
      onPress={() => onPress(item)}
      activeOpacity={0.9}
    >
      <View style={[styles.movieContainer, { width: carouselWidth, height: carouselWidth * 1.5 }]}>
        {item.poster ? (
          <Image source={{ uri: item.poster }} style={styles.poster} resizeMode="cover" />
        ) : (
          <View style={styles.posterPlaceholder}>
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default function FeaturedCarousel({ movies, onMoviePress }: FeaturedCarouselProps) {
  const { width: screenWidth } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % movies.length;
      flatListRef.current?.scrollToIndex({ 
        index: currentIndexRef.current, 
        animated: true 
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [movies.length]);

  const renderItem = useCallback(({ item }: { item: Movie }) => (
    <CarouselItem item={item} onPress={onMoviePress} screenWidth={screenWidth} />
  ), [onMoviePress, screenWidth]);

  if (movies.length === 0) return null;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={movies}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.darkGray,
  },
  poster: {
    flex: 1,
    width: '100%',
  },
  posterPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
  },
  placeholderText: {
    color: colors.mediumGray,
    fontSize: 16,
  }
});
