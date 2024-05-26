/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from "react-router-dom";
import React from "react";

import Layout from "./components/Layout";
import { ROUTES } from "./enums/routes";

const AlreadyWatchedPage = React.lazy(() => import("./pages/AlreadyWatched"));
const HomePage = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const MoviePage = React.lazy(() => import("./pages/Movie"));
const WannaWatchPage = React.lazy(() => import("./pages/WannaWatch"));
const TVShowPage = React.lazy(() => import("./pages/TVShow"));
const RegisterPage = React.lazy(() => import("./pages/Register"));
const PasswordChangePage = React.lazy(() => import("./pages/PasswordChange"));

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME_PAGE,
        element: <HomePage />,
      },
      {
        path: ROUTES.WANNA_WATCH_PAGE,
        element: <WannaWatchPage />,
      },
      {
        path: ROUTES.ALREADY_WATCHED_PAGE,
        element: <AlreadyWatchedPage />,
      },
      {
        path: ROUTES.REGISTER_PAGE,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.LOGIN_PAGE,
        element: <LoginPage />,
      },
      {
        path: ROUTES.PASSWORD_CHANGE_PAGE,
        element: <PasswordChangePage />,
      },
      {
        path: ROUTES.MOVIE_PAGE,
        element: <MoviePage />,
      },
      {
        path: ROUTES.TVSHOW_PAGE,
        element: <TVShowPage />,
      },
    ],
  },
];

export default routes;
