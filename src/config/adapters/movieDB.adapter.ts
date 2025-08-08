import { AxiosAdapter } from "./http/axios.adapter";
// import { THE_MOVIE_DB_KEY } from '@env';

export const MovieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'fafcfc846b9989b79861e2064c27b965',
        language: 'es',
    }
})