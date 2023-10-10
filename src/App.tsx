import React from "react";
import {
  Outlet, createBrowserRouter, RouterProvider, RouteObject,
} from "react-router-dom";
import { DarkModeProvider } from "components/DarkModeProvider";
import appRoutes from "pages/public/routes";
import controlPanelRoutes from "pages/controlpanel/routes";

import "./App.css";
import MainPage from "pages/public";
import ControlPanel from "pages/controlpanel";

const Root = (): JSX.Element => {
  return (
    <DarkModeProvider>
      <Outlet />
    </DarkModeProvider>
  );
};

export type AppRoute = RouteObject & {
  name: string
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
        children: appRoutes,
      }],
  },
]);
const App = (): JSX.Element => {
  return <RouterProvider router={routes} />;
};
export default App;
