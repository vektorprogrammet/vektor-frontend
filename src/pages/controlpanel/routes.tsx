import React from "react";
import Kontrollpanel from "pages/controlpanel/components/Kontrollpanel";
import { AppRoute } from "App";
import Skoler from "pages/controlpanel/components/Skoler";
import Teaminteresse from "pages/controlpanel/components/Teaminteresse";
import Assistent from "pages/controlpanel/components/Assistent";
import Brukere from "pages/controlpanel/components/Brukere";
import RegistrerSoker from "./components/RegistrerSoker/RegistrerSoker";
import Teammedlemmer from "./components/Teammedlemmer";

// The route with the corresponding component to render in the route
const routes: AppRoute[] = [
  { path: "", element: <Kontrollpanel />, name: "Kontrollpanel" },
  { path: "/kontrollpanel/skoler", element: <Skoler />, name: "Skoler" },
  { path: "/kontrollpanel/teams/:id", element: <Teammedlemmer />, name: "Teammedlemmer" },
  { path: "/kontrollpanel/teaminteresse", element: <Teaminteresse />, name: "Teaminteresse" },
  { path: "/kontrollpanel/assistenter", element: <Assistent />, name: "Assistent" },
  { path: "/kontrollpanel/registrer-soker", element: <RegistrerSoker />, name: "Registrer søker" },
  { path: "/kontrollpanel/brukere", element: <Brukere />, name: "Brukere" },
];

export default routes;
