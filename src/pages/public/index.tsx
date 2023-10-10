import React, { useEffect } from "react";
import AppFooter from "components/AppFooter/AppFooter";
import { Outlet, useLocation } from "react-router-dom";
import AppHeader from "components/Header/AppHeader";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainPage = (): JSX.Element => {
  return (
    <div className="App flex flex-col items-stretch min-h-screen">
      <ScrollToTop />
      <AppHeader />
      {/* Banner */}
      <main className="flex-grow">
        {/* Use component when the rendered component needs no props */}
        {/* Getting the routes from the defined route file in pages */}
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};
export default MainPage;
