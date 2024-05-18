import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loader from "./Loader";

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
