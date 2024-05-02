import type { AppRoute } from "@/App";
import Assistenter from "./Assistenter";
import ForForeldre from "./ForForeldre";
import ForSkoler from "./ForSkoler";
import Kontakt from "./Kontakt";
import OmOss from "./OmOss";
import ServerOverview from "./StagingServerOverview";
import teamRoutes from "./Team/TeamPages/routes";
import Utlegg from "./User/components/Utlegg";

// The route with the corresponding component to render in the route
const routes: AppRoute[] = [
  { path: "/assistenter", element: <Assistenter />, name: "Assistenter" },
  { path: "/staging", element: <ServerOverview />, name: "Staging" },
  { path: "/foreldre", element: <ForForeldre />, name: "Foreldre" },
  { path: "/skoler", element: <ForSkoler />, name: "Skoler" },
  { path: "/kontakt", element: <Kontakt />, name: "Kontakt" },
  { path: "/om-oss", element: <OmOss />, name: "Om oss" },
  { path: "/team", name: "Team", children: teamRoutes },
  { path: "/mineUtlegg", element: <Utlegg />, name: "Utlegg" },
];

export default routes;
