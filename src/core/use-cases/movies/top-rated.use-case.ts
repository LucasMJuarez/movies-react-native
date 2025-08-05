import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "./entitities/movie.entity";

export const TopRatedMoviesUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRatedMovies = await fetcher.get<NowPlayingResponse>("/top_rated");
        return topRatedMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        throw new Error('Error fetching top rated movies');
    }
}