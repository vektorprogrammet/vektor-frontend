import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { DarkModeProvider } from "components/DarkModeProvider";
import Kontrollpanel from "pages/public/Kontrollpanel/components/Kontrollpanel";
import routes from "./pages/public/routes";
import TrondheimRoutes from "./pages/public/Team/TeamPages/routes";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/Header/AppHeader";
import "./App.css";

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = (): JSX.Element => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ScrollToTop />
        {window.location.pathname === "/kontrollpanel" ? (
          <Kontrollpanel />
        ) : (
          <div className="App flex flex-col items-stretch min-h-screen">
            <AppHeader />
            {/* Banner */}
            <main className="flex-grow">
              <Routes>
                {/* Use component when the rendered component needs no props */}
                {/* Getting the routes from the defined route file in pages */}
                {routes.map((page_route) => (
                  <Route
                    key={page_route.route}
                    path={page_route.route}
                    element={<page_route.component />}
                  />
                ))}
                ,
                <Route path="/kontrollpanel" element={<Kontrollpanel />} />
                
                {TrondheimRoutes.map((page_route) => (
                  <Route
                    key={page_route.route}
                    path={page_route.route}
                    element={<page_route.component />}
                  />
                ))}
                ,
                
              </Routes>
            </main>
            <AppFooter />
          </div>
        )}
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
