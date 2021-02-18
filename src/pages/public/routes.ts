import React from "react";
import Assistenter from "./Assistenter";
import ForForeldre from "./ForForeldre";
import ForSkoler from "./ForSkoler";
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
  { route: "/for_foreldre", component: ForForeldre },
  { route: "/for_skoler", component: ForSkoler },
  { route: "/kontakt", component: Kontakt },
  { route: "/om_oss", component: OmOss },
  { route: "/team", component: Team },
];

export default routes;
