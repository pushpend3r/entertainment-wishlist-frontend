import { RouteObject } from "react-router-dom";

import Layout from "./components/Layout";

import AlreadyWatchedPage from "./pages/AlreadyWatched";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";
import WannaWatchPage from "./pages/WannaWatch";
import TVShowPage from "./pages/TVShow";
import RegisterPage from "./pages/Register";
import PasswordChangePage from "./pages/PasswordChange";

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
