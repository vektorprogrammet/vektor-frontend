import type { AppRoute } from "@/App";
import MainPage from "pages/public/mainPage";
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
  { path: "", element: <MainPage />, name: "Hjem"},
  { path: "/om-oss", element: <OmOss />, name: "Om oss" },
  { path: "/assistenter", element: <Assistenter />, name: "Assistenter" },
  { path: "/team", name: "Team", children: teamRoutes },
  { path: "/foreldre", element: <ForForeldre />, name: "Foreldre" },
  { path: "/skoler", element: <ForSkoler />, name: "Skoler" },
  { path: "/kontakt", element: <Kontakt />, name: "Kontakt" },
  // { path: "/staging", element: <ServerOverview />, name: "Staging" },
];

export default routes;
