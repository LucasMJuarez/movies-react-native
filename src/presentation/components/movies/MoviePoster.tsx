import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/use-cases/movies/entities/movie.entity'


interface Props {
    movie: Movie;
}
const MoviePoster = ({ movie }: Props) => {
  return (
    <View style={{...styles.imageContainer, height: 400 , width: 300}}>
      <Image source={{ uri: movie.poster }} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 10,

    },
    imageContainer: {
        flex: 1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9
    }
    })


export default MoviePoster
