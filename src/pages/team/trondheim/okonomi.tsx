import { TeamTemplate } from "@/components/team-template";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Okonomi() {
  return (
    <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col items-center">
      ,
      <TeamTemplate
        name="Økonomi"
        mail="okonomi@vektorprogrammet.no"
        text="Økonomiteamet har ansvaret for Vektorprogrammets økonomi."
        members={[
          {
            name: "Elise Johnsrud",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/634068f19fa01.jpeg",
            role: "Leder",
          },
          {
            name: "Rebecca Strandkleiv",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63716eb2db339.jpeg",
            role: "Medlem",
          },
          {
            name: "Øyvind Halvorsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633ff0c6b78ab.jpeg",
            role: "Medlem",
          },
          {
            name: "Anette Johansen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/626089fa76913.jpeg",
            role: "Medlem",
          },
          {
            name: "Mats Bendik Norli Kjær",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633f0b38b6a28.jpeg",
            role: "Medlem",
          },
          {
            name: "Benedicte Vestrum",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/635ad061421f4.jpeg",
            role: "Medlem",
          },
          {
            name: "Andreas lote Henden",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6356cefb83db6.jpeg",
            role: "Medlem",
          },
          {
            name: "Vilde Aas",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6356cf58ab4d5.jpeg",
            role: "Medlem",
          },
          {
            name: "Martine Kroken",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63fa23a041ecd.jpeg",
            role: "Medlem",
          },
        ]}
      />
      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-20">
        Arbeidet vårt
      </div>
      <div className="font-sans text-lg text-black text-left m-5">
        Økonomiteamet har ansvar for selve pengekassen til Vektorprogrammet.
        Dette innebærer å betale fakturaer i tide og føre regnskap over alle
        transaksjonene som blir utført. I tillegg jobber vi med budsjettet som
        settes hvert år,og følger opp at ingen av regionene overskrider
        budsjettene sine. Vi er en liten gjeng som samarbeider tett med samtlige
        team, og svarer på økonimirelaterte spørsmål ved behov. Arbeidsmengden
        ligger på rundt én-to timer i uken, avhengig av hvor mye som må betales
        og fikses på.
      </div>
      <div className="m-3">
        <img
          className="md:max-w-2xl h-auto content-center mx-auto"
          src="https://vektorprogrammet.no/images/team_images/Skjermbilde%202022-10-24%20kl.%2017.56.55.png"
        />
      </div>
      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-20">
        Sosialt i Økonomi
      </div>
      <div className="font-sans text-lg text-black text-left m-5">
        Det blir arrangert mange sosiale arrangementer, hvor du kan bli bedre
        kjent med andre teammedlemmer, både innad i økonomitemaet og hele
        Vektorprogrammet. Det varierer etter hva man ønsker å gjøre, men vi har
        tidligere spist tacomiddag og hatt film- og brettkvelder. Etter møtene
        pleier vi også sitte litt igjen på kontoret hvor vi småprater om alt
        mellom himmel og jord, altså en gyllen mulighet til å bli godt kjent med
        hverandre.
      </div>
      <div className="m-3">
        <img
          className="md:max-w-2xl h-auto content-center mx-auto"
          src="https://vektorprogrammet.no/images/team_images/Skjermbilde%202022-10-24%20kl.%2018.01.54.png"
        />
      </div>
      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-20">
        Opptak
      </div>
      <div className="grid md:grid-cols-2 ml-4 mr-4 mt-5 items-center mb-2">
        <div className="m-3">
          <div className="font-sans text-lg text-black place-content-start">
            Vi er på utkikk etter deg som er ansvarlig og strukturert, spesielt
            med tanke på du får delansvaret for alle pengemidlene til
            Vektorprogrammet. I tillegg er det fint om du har et ønske om å lære
            mer om økonomien knyttet til en frivillig organisasjon. Du bør også
            være interessert i realfag, da vi er en organisasjon som
            kontinuerlig jobber for å fremme mestring innen realfag. Kort
            oppsummert, ønsker vi deg som er interessert i tall og penger. Det
            kreves ingen forkunnskaper!
          </div>

          <div className="font-sans text-lg text-black place-content-start mt-5">
            Har du noen spørsmål er det bare å ta kontakt med oss på{" "}
            <a
              className="hover:underline text-vektor-darblue"
              href="mailto:okonomi@vektorprogrammet.no"
            >
              okonomi@vektorprogrammet.no.
            </a>
            <div className="mt-3">Vi ser frem til å høre fra deg!</div>
          </div>
        </div>

        <img
          className="max-h-96 sm:max-w-sm h-auto content-center mx-auto m-3"
          src="/images/team/OkonomiTor.png"
        />
      </div>
    </div>
  );
};
