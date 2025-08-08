import { Movie } from "../../core/entities/movie.entity";


export class UpcomingMapper {
    static fromUpcomingDBResultToEntity(result: any): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: result.release_date,
            poster: result.poster_path,
            backdrop: result.backdrop_path,
            rating: result.vote_average,
        };
    }
}