import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { MovieDBFetcher } from '../../config/adapters/movieDB.adapter';
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        UseCases.moviesNowPlayingUseCase(MovieDBFetcher),
        UseCases.UpcomingMoviesUseCase(MovieDBFetcher),
        UseCases.TopRatedMoviesUseCase(MovieDBFetcher),
        UseCases.moviesPopularUseCase(MovieDBFetcher),
      ]);
    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    setTopRated(topRatedMovies);
    setPopular(popularMovies);
    setIsLoading(false);
    console.log(
        {
            nowPlaying: nowPlayingMovies,
            upcoming: upcomingMovies,
            topRated: topRatedMovies
        }
    )
  };

  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular
  };
};
