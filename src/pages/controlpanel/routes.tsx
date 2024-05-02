import type { AppRoute } from "@/App";
import Assistent from "pages/controlpanel/components/Assistent";
import Kontrollpanel from "pages/controlpanel/components/Kontrollpanel";
import Skoler from "pages/controlpanel/components/Skoler";
import Teaminteresse from "pages/controlpanel/components/Teaminteresse";
import RegistrerSoker from "./components/RegistrerSoker/RegistrerSoker";
import OpprettTeam from "./components/Team/OpprettTeam";
import Team from "./components/Team/Team";
import Teammedlemmer from "./components/Team/Teammedlemmer";

// The route with the corresponding component to render in the route
const routes: AppRoute[] = [
  { path: "", element: <Kontrollpanel />, name: "Kontrollpanel" },
  { path: "/kontrollpanel/team", element: <Team />, name: "Team" },
  { path: "/kontrollpanel/skoler", element: <Skoler />, name: "Skoler" },
  {
    path: "/kontrollpanel/opprett-team",
    element: <OpprettTeam />,
    name: "Opprett nytt team",
  },
  {
    path: "/kontrollpanel/teams/:id",
    element: <Teammedlemmer />,
    name: "Teammedlemmer",
  },
  {
    path: "/kontrollpanel/teaminteresse",
    element: <Teaminteresse />,
    name: "Teaminteresse",
  },
  {
    path: "/kontrollpanel/assistenter",
    element: <Assistent />,
    name: "Assistent",
  },
  {
    path: "/kontrollpanel/registrer-soker",
    element: <RegistrerSoker />,
    name: "Registrer søker",
  },
];

export default routes;
