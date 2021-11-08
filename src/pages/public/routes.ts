import React from "react";
import Assistenter from "./Assistenter";
import ForForeldre from "./ForForeldre";
import ForSkoler from "./ForSkoler";
import Hjem from "./Hjem";
import Kontakt from "./Kontakt";
import OmOss from "./OmOss";
import Team from "./Team";

interface PageRoute {
  route: string;
  component: React.FunctionComponent | React.ComponentClass;
}

// The route with the corresponding component to render in the route
const routes: Array<PageRoute> = [
  { route: "/assistenter", component: Assistenter },
  { route: "/foreldre", component: ForForeldre },
  { route: "/skoler", component: ForSkoler },
  { route: "/kontakt", component: Kontakt },
  { route: "/om-vektor", component: OmOss },
  { route: "/team", component: Team },
  { route: "/", component: Hjem },
];

export default routes;
