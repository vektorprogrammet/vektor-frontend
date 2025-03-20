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
    index("pages/index.tsx"),
    route("om-oss", "pages/om-oss.tsx"),
    route("assistenter", "pages/assistenter.tsx"),
    // team
    ...prefix("team", [
      index("pages/team.tsx"),
      ...prefix("trondheim", [
        route("it", "pages/team/trondheim/it.tsx"),
        route("evaluering", "pages/team/trondheim/evaluering.tsx"),
        route("okonomi", "pages/team/trondheim/okonomi.tsx"),
        route("profilering", "pages/team/trondheim/profilering.tsx"),
        route("rekruttering", "pages/team/trondheim/rekruttering.tsx"),
        route(
          "skolekoordinering",
          "pages/team/trondheim/skolekoordinering.tsx",
        ),
        route("sponsor", "pages/team/trondheim/sponsor.tsx"),
        route("styret", "pages/team/trondheim/styret.tsx"),
      ]),
      ...prefix("aas", [
        route("styret", "pages/team/aas/styret.tsx"),
        route("sponsor-okonomi", "pages/team/aas/sponsor-okonomi.tsx"),
        route("skolekoordinering", "pages/team/aas/skolekoordinering.tsx"),
        route(
          "evaluering-rekruttering-profilering",
          "pages/team/aas/evaluering-rekruttering-profilering.tsx",
        ),
        route("sosialt", "pages/team/aas/sosialt.tsx"),
      ]),
      ...prefix("bergen", [
        route("styret", "pages/team/bergen/styret.tsx"),
        route("skolekoordinering", "pages/team/bergen/skolekoordinering.tsx"),
        route("rekruttering", "pages/team/bergen/rekruttering.tsx"),
      ]),
      route("hovedstyret", "pages/team/hovedstyret.tsx"),
    ]),
    route("foreldre", "pages/foreldre.tsx"),
    route("skoler", "pages/skoler.tsx"),
    route("kontakt", "pages/kontakt.tsx"),

    // personal pages
    route("soknader", "pages/soknader.tsx"),
  ]),
] satisfies RouteConfig;
