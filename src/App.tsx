import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./pages/public/routes";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/Header/AppHeader";

import "./App.css";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <AppHeader />
        </header>
        <div className="content">
          <Switch>
            {/* Use component when the rendered component needs no props */}
            {/* Getting the routes from the defined route file in pages */}
            {routes.map((page_route) => (
              <Route
                key={page_route.route}
                path={page_route.route}
                exact
                component={page_route.component}
              />
            ))}
          </Switch>
        </div>
        <footer>
          <AppFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
