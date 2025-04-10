import { TeamTemplate } from "@/components/team-template";
import { cn } from "~/lib/utils";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Rekruttering() {
  return (
    <div
      className={cn(
        "mx-auto mt-5 mb-20 max-w-screen-lg",
        // Depends on parent layout
        "col-span-full",
        // Affects children
        "flex flex-col items-center",
      )}
    >
      <TeamTemplate
        name="Rekruttering"
        mail="Rekruttering.uib@vektorprogrammet.no"
        text="I rekruttering jobber vi med å skaffe nye vektorassistenter!"
        members={[
          {
            name: "Erik Bjordal",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63d00e000503f.jpeg",
            role: "Leder",
          },
          {
            name: "Emma Karoline Aase Skålevik",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/652a6aa8427cd.jpeg",
            role: "Medlem",
          },
          {
            name: "Hrolfur Olafsson",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63d3c8214b847.jpeg",
            role: "Medlem",
          },
          {
            name: "Mathias Torstensen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/64258e1f08402.jpeg",
            role: "Medlem",
          },
          {
            name: "Lukas Reidar Knudsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/64187be859f08.jpeg",
            role: "Medlem",
          },
          {
            name: "Yao Yun Jackie Zhang",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63dad15ab90b2.jpeg",
            role: "Medlem",
          },
          {
            name: "Snorre Thomsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/6425847085add.jpeg",
            role: "Medlem",
          },
          {
            name: "Nicolai Ramsvik Andersen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/64f996a5938da.jpeg",
            role: "Medlem",
          },
          {
            name: "Helle Isaksen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63c9b51fb556d.jpeg",
            role: "Profilering",
          },
        ]}
      />
      <div className="m-5 mt-20 text-left font-sans text-black text-lg">
        I rekrutteringsteamet har vi ansvaret for å skaffe nye og gode
        vektorassistenter. Hovedoppgavene som medlem av rekrutteringsteamet
        består av å stå på stand, bleste i forelesninger og intervjue nye
        søkere. I tillegg har vi også ansvar de sosiale og faglige
        arrangementene vektorprogrammet arrangerer.
      </div>
    </div>
  );
}
