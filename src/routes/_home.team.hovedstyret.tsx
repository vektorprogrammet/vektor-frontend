import { TeamTemplate } from "@/components/team-template";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Hovedstyret() {
  return (
    <div className="mx-auto mt-5 mb-20 flex max-w-screen-lg flex-col">
      <TeamTemplate
        name="Hovedstyret"
        mail="hovedstyret@vektorprogrammet.no"
        text="Hovedstyret er Vektorprogrammets nasjonale styre, og har overordnet ansvar for hele organisasjonen."
        members={[
          {
            name: "Silje Li",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/64dc8c19c5885.jpeg",
            role: "Leder",
          },
          {
            name: "Ragna Vårli Håland",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633f033cb4d48.jpeg",
            role: "Nestleder",
          },
          {
            name: "Aaryan Neupane",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/644805d1e8ef2.jpeg",
            role: "IT-ansvarlig",
          },
          {
            name: "David Ramsvik",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/6370f59dcadc0.jpeg",
            role: "Mentor",
          },
          {
            name: "Thomas Bjørn Olivier Jenssen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/6172ab0646db7.jpeg",
            role: "Profilering",
          },
          {
            name: "Adrian Larsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/5f59274b49278.jpeg",
            role: "Sponsor",
          },
          {
            name: "Odin Nilsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63615c0f67d3a.jpeg",
            role: "Økonomi",
          },
        ]}
      />

      <div className="m-5 mt-8 text-left font-sans text-black text-lg">
        Styret består av åtte stillinger: Leder, nestleder,
        ekspansjonsansvarlig, IT-ansvarlig, profileringsansvarlig,
        sponsoransvarlig, økonomiansvarlig og mentor. Samlet har styret varierte
        arbeidsoppgaver, og jobber blant annet med forbedring av vedtekter,
        utarbeiding av budsjett og oppfølging rundt organisasjonens daglige
        drift.
      </div>
      <div className="m-5 mt-8 text-left font-sans text-black text-lg">
        Hovedstyret har ansvar for alle regionene, og samarbeider tett med
        lokalstyrene. Ekspansjonsansvarling har hovedansvar for å følge opp
        regionene, i tillegg innebærer rollen arbeid med utvidelse av
        organisasjonen. Økonomiansvarlig holder oversikt over hele
        organisasjonens økonomi. Sponsoransvarlig er ansvarlig for
        organisasjonens nasjonale sponsorer og å følge opp sponsorarbeid i
        regionene. Profileringsansvarlig er ansvarlig for oppfølgning av
        regioners profileringsarbeid, og grafisk design på et nasjonalt nivå.
        IT-ansvarlig har ansvar for drift og videreutvikling av hjemmesiden.
        Mentor er et erfarent medlem av Vektorprogrammet, med god kjennskap til
        organisasjonen, og har ansvar for å bidra med sin erfaring for å hjelpe
        resten av Hovedstyret der det er behov.
      </div>
      <div className="m-5 mt-8 text-left font-sans text-black text-lg">
        Nytt hovedstyre blir valgt hvert år på årsmøtet som avholdes i april.
        Alle medlemmer i Vektorprogrammet har mulighet til å stille til alle
        stillingene utenom mentor, hvor man må ha hatt en tidligere rolle i
        Hovedstyret for å kunne stille.
      </div>
    </div>
  );
}
