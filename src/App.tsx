import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "components/DarkModeProvider";
import Kontrollpanel from "pages/public/Kontrollpanel/components/Kontrollpanel";
import routes from "./pages/public/routes";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/Header/AppHeader";

import "./App.css";

const App = (): JSX.Element => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        {window.location.pathname === "/kontrollpanel" ? <Kontrollpanel />
          : (
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
