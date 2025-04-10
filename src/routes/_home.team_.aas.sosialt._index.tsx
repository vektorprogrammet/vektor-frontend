import { TeamTemplate } from "@/components/team-template";
import { cn } from "~/lib/utils";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Sosialt() {
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
        name="Sosialt"
        mail="sosialt.nmbu@vektorprogrammet.no"
        text="Vi arrangerer sosiale arrangementer for assistenter og sørger for at alle trives i vervet."
        members={[
          {
            name: "Joakim Karlsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644435fcb6edc.jpeg",
            role: "Leder",
          },
          {
            name: "Håvard Smidesang",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644523500b42e.jpeg",
            role: "Medlem",
          },
          {
            name: "My Helene Sohlberg",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/636c055160722.jpeg",
            role: "Medlem",
          },
          {
            name: "Marie Eide Roalkvam",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644523500b42e.jpeg",
            role: "Medlem",
          },
          {
            name: "Vincent Kollbotn",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644523500b42e.jpeg",
            role: "Medlem",
          },
          {
            name: "Marius Johannessen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644523500b42e.jpeg",
            role: "Medlem",
          },
        ]}
      />
    </div>
  );
}
