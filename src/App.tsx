import { DarkModeProvider } from "./components/DarkModeProvider";

import {
  Outlet,
  type RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import ControlPanel from "./pages/controlpanel";
import controlPanelRoutes from "./pages/controlpanel/routes";
import MainPage from "./pages/public";
import MineSoknader from "./pages/public/MineSoknader";
import Profil from "./pages/public/Profil/components/Profil";
import Utlegg from "./pages/public/User/components/Utlegg";
import appRoutes from "./pages/public/routes";

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
          {
            path: "mine-soknader/:id",
            element: <MineSoknader />,
          },
        ],
      },
      {
        path: "",
        element: <MainPage />,
        children: [
          {
            path: "/utlegg",
            element: <Utlegg />,
          },
        ],
      },
    ],
  },
]);

const App = (): JSX.Element => {
  return <RouterProvider router={routes} />;
};
export default App;
