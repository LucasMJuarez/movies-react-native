import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'

const HomeScreen = () => {


  const { loading, movies } = useMovies();
  return (
    <View>
        <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen
