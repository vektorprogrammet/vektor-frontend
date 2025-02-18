import TeamTemplate from "../TeamTemplate";

const Styret = () => {
  return (
    <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col">
      <TeamTemplate
        name="Styret"
        mail="nmbu@vektorprogrammet.no"
        text="Ansvarlig for driften av Vektorprogrammet i Ås."
        members={[
          {
            name: "Ane Runningen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6444359076f0d.jpeg",
            role: "Leder",
          },
          {
            name: "Thilde Marås",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6443b4f8aab15.jpeg",
            role: "Nestleder",
          },
          {
            name: "Ingrid Iselin Male Østern",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6443b33e254ba.jpeg",
            role: "Rekruttering og profilering",
          },
          {
            name: "Ingvild Hefte",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644435db96beb.jpeg",
            role: "Skolekoordinering",
          },
          {
            name: "Joakim Karlsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644435fcb6edc.jpeg",
            role: "Sosialansvarlig",
          },
          {
            name: "Vasilii Anderson",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644435c0abfa7.jpeg",
            role: "Sponsor- og Økonomiansvarleg",
          },
        ]}
      />

      <div className="font-sans text-lg text-black text-left m-5 mt-20">
        Styret består av leder, nestleder og ledere for de ulike teamene
        (sponsor/økonomi, rekruttering/profilering/evaluering, skolekoordinering
        og sosialt). I løpet av de månedlige møtene gjennomgås månedens, samt
        fremtidige saker, som kan være alt fra å organisere sosiale aktiviteter
        til å løse problemer som oppstår under driften av Vektorprogrammet i Ås.
        Hver av medlemmene i styret (med unntak av leder og nestleder) har
        ansvar for et team bestående av 3 til 6 medlemmer som hjelper til med å
        utføre ulike oppgaver for sitt team.
      </div>
      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/3D16170B-E69D-4891-ADE7-EB976B9CC272.jpeg"
          className="sm:max-w-2xl h-auto content-center mx-auto m-5"
        />
      </div>
    </div>
  );
};

export default Styret;
