enum ROUTES {
  HOME_PAGE = "/",

  WANNA_WATCH_PAGE = HOME_PAGE + "wanna-watch",
  ALREADY_WATCHED_PAGE = HOME_PAGE + "already-watched",

  REGISTER_PAGE = HOME_PAGE + "register",
  LOGIN_PAGE = HOME_PAGE + "login",
  PASSWORD_CHANGE_PAGE = HOME_PAGE + "password-change",

  MOVIE_PAGE = HOME_PAGE + "movie/:id",
  TVSHOW_PAGE = HOME_PAGE + "tvshow/:id",
}

export { ROUTES };
