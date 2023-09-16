import {
    IT,
    Evaluering,
    Okonomi,
    Profilering,
    Rekruttering,
    Skolekoordinering,
    Sponsor,
    Styret,
} from "./index";

interface PageRoute {
    route: string;
    component: React.ComponentType;
  }
  
  // The route with the corresponding component to render in the route
  const routes: Array<PageRoute> = [
    { route: "team/trondheim/IT", component: IT },
    { route: "team/trondheim/evaluering", component: Evaluering},
    { route: "team/trondheim/okonomi", component: Okonomi },
    { route: "team/trondheim/profilering", component: Profilering },
    { route: "team/trondheim/rekruttering", component: Rekruttering },
    { route: "team/trondheim/skolekoordinering", component: Skolekoordinering },
    { route: "team/trondheim/sponsor", component: Sponsor },
    { route: "team/trondheim/styret", component: Styret },
  ];
  
  export default routes;