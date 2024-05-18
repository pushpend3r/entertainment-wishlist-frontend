/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from "react-router-dom";
import React from "react";

import Layout from "./components/Layout";

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
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/wanna-watch",
        element: <WannaWatchPage />,
      },
      {
        path: "/already-watched",
        element: <AlreadyWatchedPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/password-change",
        element: <PasswordChangePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/tvshow/:id",
        element: <TVShowPage />,
      },
    ],
  },
];

export default routes;
