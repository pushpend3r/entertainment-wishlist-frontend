/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation GET_NEW_TOKENS($refreshToken: String) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.Get_New_TokensDocument,
    "\n  query GET_ALREADY_WATCHED_MEDIA {\n    getWatchedMovies {\n      id\n      name\n      overview\n      posterUrl\n      releaseDate\n    }\n    getWatchedTVShows {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n    }\n  }\n": types.Get_Already_Watched_MediaDocument,
    "\n  query GET_TRENDING {\n    trending {\n      movies {\n        id\n        name\n        overview\n        posterUrl\n        releaseDate\n      }\n      tvshows {\n        id\n        name\n        overview\n        posterUrl\n        startAirDate\n        lastAirDate\n        inProduction\n      }\n    }\n  }\n": types.Get_TrendingDocument,
    "\n  mutation LOGIN($email: String, $password: String) {\n    login(input: { email: $email, password: $password }) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  query GET_MOVIE_DETAILS($movieId: Int) {\n    getMovie(id: $movieId) {\n      id\n      name\n      overview\n      genres {\n        id\n        name\n      }\n      backdropUrl\n      posterUrl\n      actor {\n        id\n        name\n      }\n      director {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      trailerLink\n      releaseDate\n      isWatched\n      isWishlisted\n    }\n  }\n": types.Get_Movie_DetailsDocument,
    "\n  mutation ADD_MOVIE_TO_WISHLIST($movieId: Int) {\n    addMovieToWishlist(movieId: $movieId)\n  }\n": types.Add_Movie_To_WishlistDocument,
    "\n  mutation REMOVE_MOVIE_FROM_WISHLIST($movieId: Int) {\n    removeMovieFromWishlist(movieId: $movieId)\n  }\n": types.Remove_Movie_From_WishlistDocument,
    "\n  mutation ADD_MOVIE_TO_WATCHEDLIST($movieId: Int) {\n    addMovieToWatchedlist(movieId: $movieId)\n  }\n": types.Add_Movie_To_WatchedlistDocument,
    "\n  mutation REMOVE_MOVIE_FROM_WATCHEDLIST($movieId: Int) {\n    removeMovieFromWatchedlist(movieId: $movieId)\n  }\n": types.Remove_Movie_From_WatchedlistDocument,
    "\n  mutation UPDATE_PASSWORD(\n    $oldPassword: String\n    $newPassword: String\n    $accessToken: String\n    $refreshToken: String\n  ) {\n    updatePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n      accessToken: $accessToken\n      refreshToken: $refreshToken\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.Update_PasswordDocument,
    "\n  mutation REGISTER($name: String, $email: String, $password: String) {\n    createUser(input: { name: $name, email: $email, password: $password }) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.RegisterDocument,
    "\n  query GET_TVSHOW_DETAILS($tvshowId: Int) {\n    getTVShow(id: $tvshowId) {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n      genres {\n        id\n        name\n      }\n      backdropUrl\n      posterUrl\n      actor {\n        id\n        name\n      }\n      director {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      inProduction\n      trailerLink\n      seasons\n      isWatched\n      isWishlisted\n    }\n  }\n": types.Get_Tvshow_DetailsDocument,
    "\n  mutation ADD_TO_WISHLIST($tvshowId: Int) {\n    addTVShowToWishlist(tvshowId: $tvshowId)\n  }\n": types.Add_To_WishlistDocument,
    "\n  mutation REMOVE_FROM_WISHLIST($tvshowId: Int) {\n    removeTVShowFromWishlist(tvshowId: $tvshowId)\n  }\n": types.Remove_From_WishlistDocument,
    "\n  mutation ADD_TO_WATCHEDLIST($tvshowId: Int) {\n    addTVShowToWatchedlist(tvshowId: $tvshowId)\n  }\n": types.Add_To_WatchedlistDocument,
    "\n  mutation REMOVE_FROM_WATCHEDLIST($tvshowId: Int) {\n    removeTVShowFromWatchedlist(tvshowId: $tvshowId)\n  }\n": types.Remove_From_WatchedlistDocument,
    "\n  query GET_WANNA_WATCH_MEDIA {\n    getWishlistedMovies {\n      id\n      name\n      overview\n      posterUrl\n      releaseDate\n    }\n    getWishlistedTVShows {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n    }\n  }\n": types.Get_Wanna_Watch_MediaDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation GET_NEW_TOKENS($refreshToken: String) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation GET_NEW_TOKENS($refreshToken: String) {\n    getNewTokens(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_ALREADY_WATCHED_MEDIA {\n    getWatchedMovies {\n      id\n      name\n      overview\n      posterUrl\n      releaseDate\n    }\n    getWatchedTVShows {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n    }\n  }\n"): (typeof documents)["\n  query GET_ALREADY_WATCHED_MEDIA {\n    getWatchedMovies {\n      id\n      name\n      overview\n      posterUrl\n      releaseDate\n    }\n    getWatchedTVShows {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_TRENDING {\n    trending {\n      movies {\n        id\n        name\n        overview\n        posterUrl\n        releaseDate\n      }\n      tvshows {\n        id\n        name\n        overview\n        posterUrl\n        startAirDate\n        lastAirDate\n        inProduction\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_TRENDING {\n    trending {\n      movies {\n        id\n        name\n        overview\n        posterUrl\n        releaseDate\n      }\n      tvshows {\n        id\n        name\n        overview\n        posterUrl\n        startAirDate\n        lastAirDate\n        inProduction\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LOGIN($email: String, $password: String) {\n    login(input: { email: $email, password: $password }) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation LOGIN($email: String, $password: String) {\n    login(input: { email: $email, password: $password }) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_MOVIE_DETAILS($movieId: Int) {\n    getMovie(id: $movieId) {\n      id\n      name\n      overview\n      genres {\n        id\n        name\n      }\n      backdropUrl\n      posterUrl\n      actor {\n        id\n        name\n      }\n      director {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      trailerLink\n      releaseDate\n      isWatched\n      isWishlisted\n    }\n  }\n"): (typeof documents)["\n  query GET_MOVIE_DETAILS($movieId: Int) {\n    getMovie(id: $movieId) {\n      id\n      name\n      overview\n      genres {\n        id\n        name\n      }\n      backdropUrl\n      posterUrl\n      actor {\n        id\n        name\n      }\n      director {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      trailerLink\n      releaseDate\n      isWatched\n      isWishlisted\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ADD_MOVIE_TO_WISHLIST($movieId: Int) {\n    addMovieToWishlist(movieId: $movieId)\n  }\n"): (typeof documents)["\n  mutation ADD_MOVIE_TO_WISHLIST($movieId: Int) {\n    addMovieToWishlist(movieId: $movieId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation REMOVE_MOVIE_FROM_WISHLIST($movieId: Int) {\n    removeMovieFromWishlist(movieId: $movieId)\n  }\n"): (typeof documents)["\n  mutation REMOVE_MOVIE_FROM_WISHLIST($movieId: Int) {\n    removeMovieFromWishlist(movieId: $movieId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ADD_MOVIE_TO_WATCHEDLIST($movieId: Int) {\n    addMovieToWatchedlist(movieId: $movieId)\n  }\n"): (typeof documents)["\n  mutation ADD_MOVIE_TO_WATCHEDLIST($movieId: Int) {\n    addMovieToWatchedlist(movieId: $movieId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation REMOVE_MOVIE_FROM_WATCHEDLIST($movieId: Int) {\n    removeMovieFromWatchedlist(movieId: $movieId)\n  }\n"): (typeof documents)["\n  mutation REMOVE_MOVIE_FROM_WATCHEDLIST($movieId: Int) {\n    removeMovieFromWatchedlist(movieId: $movieId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UPDATE_PASSWORD(\n    $oldPassword: String\n    $newPassword: String\n    $accessToken: String\n    $refreshToken: String\n  ) {\n    updatePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n      accessToken: $accessToken\n      refreshToken: $refreshToken\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation UPDATE_PASSWORD(\n    $oldPassword: String\n    $newPassword: String\n    $accessToken: String\n    $refreshToken: String\n  ) {\n    updatePassword(\n      oldPassword: $oldPassword\n      newPassword: $newPassword\n      accessToken: $accessToken\n      refreshToken: $refreshToken\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation REGISTER($name: String, $email: String, $password: String) {\n    createUser(input: { name: $name, email: $email, password: $password }) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation REGISTER($name: String, $email: String, $password: String) {\n    createUser(input: { name: $name, email: $email, password: $password }) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_TVSHOW_DETAILS($tvshowId: Int) {\n    getTVShow(id: $tvshowId) {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n      genres {\n        id\n        name\n      }\n      backdropUrl\n      posterUrl\n      actor {\n        id\n        name\n      }\n      director {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      inProduction\n      trailerLink\n      seasons\n      isWatched\n      isWishlisted\n    }\n  }\n"): (typeof documents)["\n  query GET_TVSHOW_DETAILS($tvshowId: Int) {\n    getTVShow(id: $tvshowId) {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n      genres {\n        id\n        name\n      }\n      backdropUrl\n      posterUrl\n      actor {\n        id\n        name\n      }\n      director {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      inProduction\n      trailerLink\n      seasons\n      isWatched\n      isWishlisted\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ADD_TO_WISHLIST($tvshowId: Int) {\n    addTVShowToWishlist(tvshowId: $tvshowId)\n  }\n"): (typeof documents)["\n  mutation ADD_TO_WISHLIST($tvshowId: Int) {\n    addTVShowToWishlist(tvshowId: $tvshowId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation REMOVE_FROM_WISHLIST($tvshowId: Int) {\n    removeTVShowFromWishlist(tvshowId: $tvshowId)\n  }\n"): (typeof documents)["\n  mutation REMOVE_FROM_WISHLIST($tvshowId: Int) {\n    removeTVShowFromWishlist(tvshowId: $tvshowId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ADD_TO_WATCHEDLIST($tvshowId: Int) {\n    addTVShowToWatchedlist(tvshowId: $tvshowId)\n  }\n"): (typeof documents)["\n  mutation ADD_TO_WATCHEDLIST($tvshowId: Int) {\n    addTVShowToWatchedlist(tvshowId: $tvshowId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation REMOVE_FROM_WATCHEDLIST($tvshowId: Int) {\n    removeTVShowFromWatchedlist(tvshowId: $tvshowId)\n  }\n"): (typeof documents)["\n  mutation REMOVE_FROM_WATCHEDLIST($tvshowId: Int) {\n    removeTVShowFromWatchedlist(tvshowId: $tvshowId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_WANNA_WATCH_MEDIA {\n    getWishlistedMovies {\n      id\n      name\n      overview\n      posterUrl\n      releaseDate\n    }\n    getWishlistedTVShows {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n    }\n  }\n"): (typeof documents)["\n  query GET_WANNA_WATCH_MEDIA {\n    getWishlistedMovies {\n      id\n      name\n      overview\n      posterUrl\n      releaseDate\n    }\n    getWishlistedTVShows {\n      id\n      name\n      overview\n      posterUrl\n      startAirDate\n      lastAirDate\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;