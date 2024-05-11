export enum TokenType {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Person {
  id: number;
  name: string;
  character: string;
  imageUrl: string;
}

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  posterUrl: string;
  startAirDate: string;
  lastAirDate: string;
  genres: Genre[];
  backdropUrl: string;
  actor: Person[];
  director: Person[];
  writer: Person[];
  inProduction: boolean;
  trailerLink: string;
  seasons: number;
  isWatched: boolean;
  isWishlisted: boolean;
}

export interface Movie {
  id: number;
  name: string;
  overview: string;
  posterUrl: string;
  releaseDate: string;
  backdropUrl: string;
  genres: Genre[];
  actor: Person[];
  director: Person[];
  writer: Person[];
  trailerLink: string;
  isWatched: boolean;
  isWishlisted: boolean;
}
