/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Movie = {
  __typename?: 'Movie';
  actor?: Maybe<Array<Person>>;
  backdropUrl?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Array<Person>>;
  genres?: Maybe<Array<Genre>>;
  id: Scalars['Int']['output'];
  isWatched?: Maybe<Scalars['Boolean']['output']>;
  isWishlisted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  posterUrl?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  trailerLink?: Maybe<Scalars['String']['output']>;
  writer?: Maybe<Array<Person>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovieToWatchedlist?: Maybe<Scalars['Boolean']['output']>;
  addMovieToWishlist?: Maybe<Scalars['Boolean']['output']>;
  addTVShowToWatchedlist?: Maybe<Scalars['Boolean']['output']>;
  addTVShowToWishlist?: Maybe<Scalars['Boolean']['output']>;
  createUser?: Maybe<Tokens>;
  getNewTokens?: Maybe<Tokens>;
  login?: Maybe<Tokens>;
  removeMovieFromWatchedlist?: Maybe<Scalars['Boolean']['output']>;
  removeMovieFromWishlist?: Maybe<Scalars['Boolean']['output']>;
  removeTVShowFromWatchedlist?: Maybe<Scalars['Boolean']['output']>;
  removeTVShowFromWishlist?: Maybe<Scalars['Boolean']['output']>;
  updatePassword?: Maybe<Tokens>;
};


export type MutationAddMovieToWatchedlistArgs = {
  movieId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddMovieToWishlistArgs = {
  movieId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddTvShowToWatchedlistArgs = {
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationAddTvShowToWishlistArgs = {
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationGetNewTokensArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRemoveMovieFromWatchedlistArgs = {
  movieId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRemoveMovieFromWishlistArgs = {
  movieId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRemoveTvShowFromWatchedlistArgs = {
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRemoveTvShowFromWishlistArgs = {
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePasswordArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};

export type Person = {
  __typename?: 'Person';
  character?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getMovie?: Maybe<Movie>;
  getTVShow?: Maybe<TvShow>;
  getWatchedMovies?: Maybe<Array<Maybe<Movie>>>;
  getWatchedTVShows?: Maybe<Array<Maybe<TvShow>>>;
  getWishlistedMovies?: Maybe<Array<Maybe<Movie>>>;
  getWishlistedTVShows?: Maybe<Array<Maybe<TvShow>>>;
  login?: Maybe<Tokens>;
  trending?: Maybe<Trending>;
};


export type QueryGetMovieArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTvShowArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLoginArgs = {
  input?: InputMaybe<LoginInput>;
};

export type TvShow = {
  __typename?: 'TVShow';
  actor?: Maybe<Array<Person>>;
  backdropUrl?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Array<Person>>;
  genres?: Maybe<Array<Genre>>;
  id: Scalars['Int']['output'];
  inProduction?: Maybe<Scalars['Boolean']['output']>;
  isWatched?: Maybe<Scalars['Boolean']['output']>;
  isWishlisted?: Maybe<Scalars['Boolean']['output']>;
  lastAirDate?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  posterUrl?: Maybe<Scalars['String']['output']>;
  seasons?: Maybe<Scalars['Int']['output']>;
  startAirDate?: Maybe<Scalars['String']['output']>;
  trailerLink?: Maybe<Scalars['String']['output']>;
  writer?: Maybe<Array<Person>>;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type Trending = {
  __typename?: 'Trending';
  movies?: Maybe<Array<Maybe<Movie>>>;
  tvshows?: Maybe<Array<Maybe<TvShow>>>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type Get_New_TokensMutationVariables = Exact<{
  refreshToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type Get_New_TokensMutation = { __typename?: 'Mutation', getNewTokens?: { __typename?: 'Tokens', accessToken?: string | null, refreshToken?: string | null } | null };

export type Get_Already_Watched_MediaQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Already_Watched_MediaQuery = { __typename?: 'Query', getWatchedMovies?: Array<{ __typename?: 'Movie', id: number, name?: string | null, overview?: string | null, posterUrl?: string | null, releaseDate?: string | null } | null> | null, getWatchedTVShows?: Array<{ __typename?: 'TVShow', id: number, name?: string | null, overview?: string | null, posterUrl?: string | null, startAirDate?: string | null, lastAirDate?: string | null } | null> | null };

export type Get_TrendingQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_TrendingQuery = { __typename?: 'Query', trending?: { __typename?: 'Trending', movies?: Array<{ __typename?: 'Movie', id: number, name?: string | null, overview?: string | null, posterUrl?: string | null, releaseDate?: string | null } | null> | null, tvshows?: Array<{ __typename?: 'TVShow', id: number, name?: string | null, overview?: string | null, posterUrl?: string | null, startAirDate?: string | null, lastAirDate?: string | null, inProduction?: boolean | null } | null> | null } | null };

export type LoginMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Tokens', accessToken?: string | null, refreshToken?: string | null } | null };

export type Get_Movie_DetailsQueryVariables = Exact<{
  movieId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_Movie_DetailsQuery = { __typename?: 'Query', getMovie?: { __typename?: 'Movie', id: number, name?: string | null, overview?: string | null, backdropUrl?: string | null, posterUrl?: string | null, trailerLink?: string | null, releaseDate?: string | null, isWatched?: boolean | null, isWishlisted?: boolean | null, genres?: Array<{ __typename?: 'Genre', id: number, name?: string | null }> | null, actor?: Array<{ __typename?: 'Person', id: number, name?: string | null }> | null, director?: Array<{ __typename?: 'Person', id: number, name?: string | null }> | null, writer?: Array<{ __typename?: 'Person', id: number, name?: string | null }> | null } | null };

export type Add_Movie_To_WishlistMutationVariables = Exact<{
  movieId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Add_Movie_To_WishlistMutation = { __typename?: 'Mutation', addMovieToWishlist?: boolean | null };

export type Remove_Movie_From_WishlistMutationVariables = Exact<{
  movieId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Remove_Movie_From_WishlistMutation = { __typename?: 'Mutation', removeMovieFromWishlist?: boolean | null };

export type Add_Movie_To_WatchedlistMutationVariables = Exact<{
  movieId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Add_Movie_To_WatchedlistMutation = { __typename?: 'Mutation', addMovieToWatchedlist?: boolean | null };

export type Remove_Movie_From_WatchedlistMutationVariables = Exact<{
  movieId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Remove_Movie_From_WatchedlistMutation = { __typename?: 'Mutation', removeMovieFromWatchedlist?: boolean | null };

export type Update_PasswordMutationVariables = Exact<{
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  accessToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type Update_PasswordMutation = { __typename?: 'Mutation', updatePassword?: { __typename?: 'Tokens', accessToken?: string | null, refreshToken?: string | null } | null };

export type RegisterMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'Tokens', accessToken?: string | null, refreshToken?: string | null } | null };

export type Get_Tvshow_DetailsQueryVariables = Exact<{
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Get_Tvshow_DetailsQuery = { __typename?: 'Query', getTVShow?: { __typename?: 'TVShow', id: number, name?: string | null, overview?: string | null, posterUrl?: string | null, startAirDate?: string | null, lastAirDate?: string | null, backdropUrl?: string | null, inProduction?: boolean | null, trailerLink?: string | null, seasons?: number | null, isWatched?: boolean | null, isWishlisted?: boolean | null, genres?: Array<{ __typename?: 'Genre', id: number, name?: string | null }> | null, actor?: Array<{ __typename?: 'Person', id: number, name?: string | null }> | null, director?: Array<{ __typename?: 'Person', id: number, name?: string | null }> | null, writer?: Array<{ __typename?: 'Person', id: number, name?: string | null }> | null } | null };

export type Add_To_WishlistMutationVariables = Exact<{
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Add_To_WishlistMutation = { __typename?: 'Mutation', addTVShowToWishlist?: boolean | null };

export type Remove_From_WishlistMutationVariables = Exact<{
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Remove_From_WishlistMutation = { __typename?: 'Mutation', removeTVShowFromWishlist?: boolean | null };

export type Add_To_WatchedlistMutationVariables = Exact<{
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Add_To_WatchedlistMutation = { __typename?: 'Mutation', addTVShowToWatchedlist?: boolean | null };

export type Remove_From_WatchedlistMutationVariables = Exact<{
  tvshowId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type Remove_From_WatchedlistMutation = { __typename?: 'Mutation', removeTVShowFromWatchedlist?: boolean | null };

export type Get_Wanna_Watch_MediaQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Wanna_Watch_MediaQuery = { __typename?: 'Query', getWishlistedMovies?: Array<{ __typename?: 'Movie', id: number, name?: string | null, overview?: string | null, posterUrl?: string | null, releaseDate?: string | null } | null> | null, getWishlistedTVShows?: Array<{ __typename?: 'TVShow', id: number, name?: string | null, overview?: string | null, posterUrl?: string | null, startAirDate?: string | null, lastAirDate?: string | null } | null> | null };


export const Get_New_TokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GET_NEW_TOKENS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNewTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<Get_New_TokensMutation, Get_New_TokensMutationVariables>;
export const Get_Already_Watched_MediaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ALREADY_WATCHED_MEDIA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWatchedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getWatchedTVShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"startAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastAirDate"}}]}}]}}]} as unknown as DocumentNode<Get_Already_Watched_MediaQuery, Get_Already_Watched_MediaQueryVariables>;
export const Get_TrendingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_TRENDING"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trending"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tvshows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"startAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"inProduction"}}]}}]}}]}}]} as unknown as DocumentNode<Get_TrendingQuery, Get_TrendingQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LOGIN"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const Get_Movie_DetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_MOVIE_DETAILS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backdropUrl"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"director"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trailerLink"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"isWatched"}},{"kind":"Field","name":{"kind":"Name","value":"isWishlisted"}}]}}]}}]} as unknown as DocumentNode<Get_Movie_DetailsQuery, Get_Movie_DetailsQueryVariables>;
export const Add_Movie_To_WishlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_MOVIE_TO_WISHLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMovieToWishlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}}]}]}}]} as unknown as DocumentNode<Add_Movie_To_WishlistMutation, Add_Movie_To_WishlistMutationVariables>;
export const Remove_Movie_From_WishlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_MOVIE_FROM_WISHLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMovieFromWishlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}}]}]}}]} as unknown as DocumentNode<Remove_Movie_From_WishlistMutation, Remove_Movie_From_WishlistMutationVariables>;
export const Add_Movie_To_WatchedlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_MOVIE_TO_WATCHEDLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMovieToWatchedlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}}]}]}}]} as unknown as DocumentNode<Add_Movie_To_WatchedlistMutation, Add_Movie_To_WatchedlistMutationVariables>;
export const Remove_Movie_From_WatchedlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_MOVIE_FROM_WATCHEDLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMovieFromWatchedlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"movieId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movieId"}}}]}]}}]} as unknown as DocumentNode<Remove_Movie_From_WatchedlistMutation, Remove_Movie_From_WatchedlistMutationVariables>;
export const Update_PasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UPDATE_PASSWORD"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"accessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accessToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<Update_PasswordMutation, Update_PasswordMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REGISTER"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const Get_Tvshow_DetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_TVSHOW_DETAILS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTVShow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"startAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backdropUrl"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"director"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inProduction"}},{"kind":"Field","name":{"kind":"Name","value":"trailerLink"}},{"kind":"Field","name":{"kind":"Name","value":"seasons"}},{"kind":"Field","name":{"kind":"Name","value":"isWatched"}},{"kind":"Field","name":{"kind":"Name","value":"isWishlisted"}}]}}]}}]} as unknown as DocumentNode<Get_Tvshow_DetailsQuery, Get_Tvshow_DetailsQueryVariables>;
export const Add_To_WishlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TO_WISHLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTVShowToWishlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tvshowId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}}}]}]}}]} as unknown as DocumentNode<Add_To_WishlistMutation, Add_To_WishlistMutationVariables>;
export const Remove_From_WishlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_FROM_WISHLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTVShowFromWishlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tvshowId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}}}]}]}}]} as unknown as DocumentNode<Remove_From_WishlistMutation, Remove_From_WishlistMutationVariables>;
export const Add_To_WatchedlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ADD_TO_WATCHEDLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addTVShowToWatchedlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tvshowId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}}}]}]}}]} as unknown as DocumentNode<Add_To_WatchedlistMutation, Add_To_WatchedlistMutationVariables>;
export const Remove_From_WatchedlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"REMOVE_FROM_WATCHEDLIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeTVShowFromWatchedlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tvshowId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvshowId"}}}]}]}}]} as unknown as DocumentNode<Remove_From_WatchedlistMutation, Remove_From_WatchedlistMutationVariables>;
export const Get_Wanna_Watch_MediaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_WANNA_WATCH_MEDIA"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWishlistedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getWishlistedTVShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"startAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastAirDate"}}]}}]}}]} as unknown as DocumentNode<Get_Wanna_Watch_MediaQuery, Get_Wanna_Watch_MediaQueryVariables>;