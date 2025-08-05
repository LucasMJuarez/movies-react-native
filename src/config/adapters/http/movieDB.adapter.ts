import { AxiosAdapter } from "./axios.adapter";

export const MovieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie/now_playing',
    params:{
        api_key: 'fafcfc846b9989b79861e2064c27b965',
        language: 'es',
    }
})