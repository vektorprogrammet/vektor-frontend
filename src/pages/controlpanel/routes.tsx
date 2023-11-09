import React from "react";
import Kontrollpanel from "pages/controlpanel/components/Kontrollpanel";
import { AppRoute } from "App";
import Skoler from "pages/controlpanel/components/Skoler";
import Teaminteresse from "pages/controlpanel/components/Teaminteresse";
import Teammedlemmer from "./components/Teammedlemmer";
import Assistent from "pages/controlpanel/components/Assistent";

// The route with the corresponding component to render in the route
const routes: AppRoute[] = [
  { path: "", element: <Kontrollpanel />, name: "Kontrollpanel" },
  { path: "/kontrollpanel/skoler", element: <Skoler />, name: "Skoler" },
  { path: "/kontrollpanel/teams/:id", element: <Teammedlemmer />, name: "Teammedlemmer" },
  { path: "/kontrollpanel/teaminteresse", element: <Teaminteresse />, name: "Teaminteresse" },
  { path: "/kontrollpanel/assistenter", element: <Assistent />, name: "Assistent" },
];

export default routes;
