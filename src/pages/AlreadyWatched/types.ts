import { Movie, TVShow } from "../../types";

export interface GetAlreadyWatchedMedia {
  getWatchedMovies: Movie[];
  getWatchedTVShows: TVShow[];
}
