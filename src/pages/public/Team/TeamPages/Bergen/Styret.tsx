import type { JSX } from "react";

import TeamTemplate from "../TeamTemplate";

const Styret = (): JSX.Element => {
  return (
    <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col">
      <TeamTemplate
        name="Styret"
        mail="uib@vektorprogrammet.no"
        text="Ansvarlig for driften av Vektorprogrammet i Bergen."
        members={[
          {
            name: "Hrolfur Olafsson",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63d3c8214b847.jpeg",
            role: "Leder",
          },
          {
            name: "Nicolai Ramsvik Andersen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/64f996a5938da.jpeg",
            role: "Nestleder",
          },
          {
            name: "Erik Bjordal",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63d00e000503f.jpeg",
            role: "Rekruttering",
          },
          {
            name: "Balder Hopp-Haugstvedt",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img_small/images/Profile%20photos/63d0175742e04.jpeg",
            role: "Skolekoordinering",
          },
        ]}
      />

      <div className="font-sans text-lg text-black text-left m-5 mt-20">
        Styret består av leder, nestleder, sekretær og alle teamlederne. I løpet
        av de ukentlige møtene gjennomgåes ukens og fremtidige saker, som kan
        være alt fra å organisere sosiale aktiviteter til å løse problemer som
        oppstår under driften av Vektorprogrammet i Bergen.
      </div>
    </div>
  );
};

export default Styret;
