import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';

const HomeScreen = () => {

  const {top} = useSafeAreaInsets() 
  const {isLoading, nowPlaying}  = useMovies();

  if(isLoading){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <ScrollView >
        <View style={{ marginTop: top + 20, paddingBottom: 30}}>
          <PosterCarousel movies={nowPlaying} />
        </View>
    </ScrollView>
  )
}

export default HomeScreen
