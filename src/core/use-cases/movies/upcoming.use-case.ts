import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const UpcomingMoviesUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcomingMovies = await fetcher.get<MovieDBMoviesResponse>("/upcoming");
        return upcomingMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        throw new Error('Error fetching upcoming movies');
    }
}