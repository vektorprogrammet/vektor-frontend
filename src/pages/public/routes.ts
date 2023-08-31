import React from "react";
import Assistenter from "./Assistenter";
import ForForeldre from "./ForForeldre";
import ForSkoler from "./ForSkoler";
import Kontakt from "./Kontakt";
import OmOss from "./OmOss";
import Team from "./Team";
import ServerOverview from "./StagingServerOverview";

interface PageRoute {
  route: string;
  component: React.ComponentType;
}
 
// The route with the corresponding component to render in the route
const routes: Array<PageRoute> = [
  { route: "/assistenter", component: Assistenter },
  { route: "/staging", component: ServerOverview },
  { route: "/foreldre", component: ForForeldre },
  { route: "/skoler", component: ForSkoler },
  { route: "/kontakt", component: Kontakt },
  { route: "/om-oss", component: OmOss },
  { route: "/team", component: Team },
];

export default routes;
