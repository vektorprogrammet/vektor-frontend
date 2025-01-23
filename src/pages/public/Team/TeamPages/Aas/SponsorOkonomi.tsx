import type { JSX } from "react";

import TeamTemplate from "../TeamTemplate";

const SponsorOkonomi = (): JSX.Element => {
  return (
    <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col">
      <TeamTemplate
        name="Sponsor og økonomi"
        mail="sponsor.nmbu@vektorprogrammet.no"
        text="Har ansvaret for økonomien og sponsorene til Vektorprogrammet Ås."
        members={[
          {
            name: "Vasilii Anderson",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644435c0abfa7.jpeg",
            role: "Leder",
          },
          {
            name: "Elinor Smedstad",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/636c0467baba3.jpeg",
            role: "Medlem",
          },
          {
            name: "Kamilla Kleppang",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/636c058bdf4de.jpeg",
            role: "Medlem",
          },
          {
            name: "Iftikhar Amiri",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/defaultProfile.png",
            role: "Medlem",
          },
        ]}
      />

      <div className="font-sans text-lg text-black text-left m-5 mt-20">
        Teamet har ansvar for å holde oversikt over økonomien til
        Vektorprogrammet på Ås. I tillegg jobber de også med å skaffe sponsorer
        i løpet av semesteret ved å ta kontakt med bedrifter i nærområdet.
      </div>
      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/%C3%85s%20h%C3%B8st%202022/okonomi_spons.jpg"
          className="sm:max-w-2xl h-auto content-center mx-auto m-5"
        />
      </div>
    </div>
  );
};

export default SponsorOkonomi;
