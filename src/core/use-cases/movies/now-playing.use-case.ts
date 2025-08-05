import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "./entitities/movie.entity";


 export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
   const nowPlayingMovies = await fetcher.get<NowPlayingResponse>("/now_playing");
   return nowPlayingMovies;
  } catch (error) {

    throw new Error('Error fetching now playing movies');
  }
 }