import { useEffect, useState } from "react"
import { Movie } from "../../core/use-cases/movies/entitities/movie.entity";
import * as UseCases from '../../core/use-cases'
import { MovieDBFetcher } from "../../config/adapters/http/movieDB.adapter";
export const useMovies = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() =>{
        initialLoad()
    },[])


    const initialLoad = async () =>
    {
       const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(MovieDBFetcher)
}


}