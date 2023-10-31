import React from "react";
import { DarkModeProvider } from "components/DarkModeProvider";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

import "./App.css";
import MainPage from "pages/public";
import ControlPanel from "pages/controlpanel";
import Profil from "pages/public/Profil/components/Profil";
import Utlegg from "pages/public/User/Utlegg";
import appRoutes from "./pages/public/routes";
import controlPanelRoutes from "./pages/controlpanel/routes";

const Root = (): JSX.Element => {
  return (
    <DarkModeProvider>
      <Outlet />
    </DarkModeProvider>
  );
};

export type AppRoute = RouteObject & {
  name?: string;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "kontrollpanel",
        element: <ControlPanel />,
        children: controlPanelRoutes,
      },
      {
        path: "",
        element: <MainPage />,
        children: [
          ...appRoutes,
          {
            path: "profil/:id",
            element: <Profil />,
          },
        ],
      },
      { path: "/utlegg", element: <Utlegg /> }],
  },
]);

const App = (): JSX.Element => {
  return <RouterProvider router={routes} />;
};
export default App;
