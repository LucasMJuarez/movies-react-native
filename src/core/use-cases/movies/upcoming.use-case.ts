import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { UpcomingMapper } from "../../../infrastructure/mappers/upcoming.mapper";
import { Movie } from "../../entities/movie.entity";

export const UpcomingMoviesUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcomingMovies = await fetcher.get<NowPlayingResponse>("/upcoming");
        return upcomingMovies.results.map(UpcomingMapper.fromUpcomingDBResultToEntity);
    } catch (error) {
        throw new Error('Error fetching upcoming movies');
    }
}