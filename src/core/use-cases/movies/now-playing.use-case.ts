import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "./entities/movie.entity";


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlayingMovies = await fetcher.get<NowPlayingResponse>("/now_playing");
        return nowPlayingMovies.results.map(MovieMapper.fromMovieDBResultToEntity)
    } catch (error) {

        throw new Error('Error fetching now playing movies');
    }
}