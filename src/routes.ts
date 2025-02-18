import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export const navRoutes = [
  { path: "", name: "Hjem" },
  { path: "om-oss", name: "Om oss" },
  { path: "assistenter", name: "Assistenter" },
  { path: "team", name: "Team" },
  { path: "foreldre", name: "Foreldre" },
  { path: "skoler", name: "Skoler" },
  { path: "kontakt", name: "Kontakt" },
  // { path: "/staging", element: <ServerOverview />, name: "Staging" },
];

// biome-ignore lint/style/noDefaultExport: Routes configuration require default export https://reactrouter.com/start/framework/routing
export default [
  layout("pages/layout.tsx", [
    index("pages/public/mainPage.tsx"),
    route("om-oss", "pages/public/OmOss/index.ts"),
    route("assistenter", "pages/public/Assistenter/index.ts"),
    // team
    ...prefix("team", [
      index("pages/public/Team/components/Team.tsx"),
      ...prefix("trondheim", [
        route("it", "pages/public/Team/TeamPages/Trondheim/IT.tsx"),
        route(
          "evaluering",
          "pages/public/Team/TeamPages/Trondheim/Evaluering.tsx",
        ),
        route("okonomi", "pages/public/Team/TeamPages/Trondheim/Okonomi.tsx"),
        route(
          "profilering",
          "pages/public/Team/TeamPages/Trondheim/Profilering.tsx",
        ),
        route(
          "rekruttering",
          "pages/public/Team/TeamPages/Trondheim/Rekruttering.tsx",
        ),
        route(
          "skolekoordinering",
          "pages/public/Team/TeamPages/Trondheim/Skolekoordinering.tsx",
        ),
        route("sponsor", "pages/public/Team/TeamPages/Trondheim/Sponsor.tsx"),
        route("styret", "pages/public/Team/TeamPages/Trondheim/Styret.tsx"),
      ]),
      ...prefix("aas", [
        route("styret", "pages/public/Team/TeamPages/Aas/Styret.tsx"),
        route(
          "sponsor-okonomi",
          "pages/public/Team/TeamPages/Aas/SponsorOkonomi.tsx",
        ),
        route(
          "skolekoordinering",
          "pages/public/Team/TeamPages/Aas/Skolekoordinering.tsx",
        ),
        route(
          "evaluering-rekruttering-profilering",
          "pages/public/Team/TeamPages/Aas/EvalueringRekrutteringProfilering.tsx",
        ),
        route("sosialt", "pages/public/Team/TeamPages/Aas/Sosialt.tsx"),
      ]),
      ...prefix("bergen", [
        route("styret", "pages/public/Team/TeamPages/Bergen/Styret.tsx"),
        route(
          "skolekoordinering",
          "pages/public/Team/TeamPages/Bergen/Skolekoordinering.tsx",
        ),
        route(
          "rekruttering",
          "pages/public/Team/TeamPages/Bergen/Rekruttering.tsx",
        ),
      ]),
      route(
        "hovedstyret",
        "pages/public/Team/TeamPages/Hovedstyret/Hovedstyret.tsx",
      ),
    ]),
    route("foreldre", "pages/foreldre.tsx"),
    route("skoler", "pages/skoler.tsx"),
    route("kontakt", "pages/public/Kontakt/index.ts"),

    // personal pages
    route("profil", "pages/profil.tsx"),
    route("soknader", "pages/soknader.tsx"),
    route("utlegg", "pages/public/User/components/Utlegg.tsx"),
  ]),
] satisfies RouteConfig;
