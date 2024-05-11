import { Movie, TVShow } from "../../types";

export interface GetTrending {
  trending: {
    movies: Movie[];
    tvshows: TVShow[];
  };
}
