import React from "react";
import { AppRoute } from "App";
import Team from "../index";
import Hovedstyret from "./Hovedstyret/Hovedstyret";
import {
  IT,
  Evaluering,
  Okonomi,
  Profilering,
  Rekruttering,
  Skolekoordinering,
  Sponsor,
  Styret,
  StyretAas,
  SponsorOkonomiAas,
  SkolekoordineringAas,
  EvalueringRekrutteringProfileringAas,
  SosialtAas,
} from "./index";

// The route with the corresponding component to render in the route
const routes: AppRoute[] = [
  { index: true, element: <Team /> },
  { path: "trondheim/IT", element: <IT />, name: "IT" },
  { path: "trondheim/evaluering", element: <Evaluering />, name: "evaluering" },
  { path: "trondheim/okonomi", element: <Okonomi />, name: "okonomi" },
  { path: "trondheim/profilering", element: <Profilering />, name: "profilering" },
  { path: "trondheim/rekruttering", element: <Rekruttering />, name: "rekruttering" },
  { path: "trondheim/skolekoordinering", element: <Skolekoordinering />, name: "skolekoordinering" },
  { path: "trondheim/sponsor", element: <Sponsor />, name: "sponsor" },
  { path: "trondheim/styret", element: <Styret />, name: "styret" },
  { path: "aas/styret", element: <StyretAas />, name: "styret" },
  { path: "aas/sponsor-okonomi", element: <SponsorOkonomiAas />, name: "sponsor-okonomi" },
  { path: "aas/skolekoordinering", element: <SkolekoordineringAas />, name: "skolekoordinering" },
  { path: "aas/evaluering-rekruttering-profilering", element: <EvalueringRekrutteringProfileringAas />, name: "evaluering-rekruttering-profilering" },
  { path: "aas/sosialt", element: <SosialtAas />, name: "sosialt" },
  { path: "hovedstyret", element: <Hovedstyret />, name: "hovedstyret" },
];
export default routes;
