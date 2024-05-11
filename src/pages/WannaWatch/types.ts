import { Movie, TVShow } from "../../types";

export interface GetWannaWatchMedia {
  getWishlistedMovies: Movie[];
  getWishlistedTVShows: TVShow[];
}
