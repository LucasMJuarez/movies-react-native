import React from 'react';
import { Image, StyleSheet, View, Pressable } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
const MoviePoster = ({ movie, height, width }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Details', { movieId: String(movie.id) })
      }
      style={({ pressed }) => ({
        width,
        height,
        opacity: pressed ? 0.7 : 1,
        marginHorizontal: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
      })}
    >
      <View
        style={{
          ...styles.imageContainer,
          height: height || 400,
          width: width || 300,
        }}
      >
        <Image source={{ uri: movie.poster }} style={styles.image} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 9,
  },
});

export default MoviePoster;
