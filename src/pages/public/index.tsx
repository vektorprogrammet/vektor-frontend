import React, { useEffect } from "react";
import AppFooter from "components/AppFooter/AppFooter";
import { Outlet, useLocation } from "react-router-dom";
import AppHeader from "components/Header/AppHeader";
import { ScrollRestoration } from "react-router-dom";

const MainPage = (): JSX.Element => {
  return (
    <div className="App flex flex-col items-stretch min-h-screen">
      <AppHeader />
      <ScrollRestoration/>
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
