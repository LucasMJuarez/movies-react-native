import { useEffect, useState } from 'react';
import * as UseCases from '../../core/use-cases';
import  {MovieDBFetcher}  from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';


export const useMovie = ( movieId: number ) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
//   const [cast, setCast] = useState<Cast[]>();


  useEffect(() => {
    loadMovie();    
  }, [movieId]);


  const loadMovie = async() => {
    setIsLoading(true);

    const fullMoviePromise = UseCases.getMovieByIdUseCase(MovieDBFetcher, movieId);
    // const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);
    
    const [ fullMovie ] = await Promise.all([ fullMoviePromise ]);

    setMovie(fullMovie);
    // setCast( cast );

    setIsLoading(false);

  }
    return {
    isLoading,
    movie,
    // cast,
  }
}