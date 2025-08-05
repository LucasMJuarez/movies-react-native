
//aca con esta entity uso en toda la aplicacion mi propio modelo, es decir que si cambia el API, solo tengo que cambiar esta entity
export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: string;
    poster: string;
    backdrop: string;
}
