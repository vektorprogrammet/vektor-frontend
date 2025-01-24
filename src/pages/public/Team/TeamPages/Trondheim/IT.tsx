import TeamTemplate from "../TeamTemplate";

const IT = (): JSX.Element => {
  return (
    <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col">
      <TeamTemplate
        name="IT"
        mail="it@vektorprogrammet.no"
        text="IT-teamet utvikler og drifter Vektorprogrammets nettside og interne datasystemer."
        members={[
          {
            name: "Erlend Marius Ommundsen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/635251aabe0e2.jpeg",
            role: "Leder",
          },
          {
            name: "Trym Tveito",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/60644bb0899a8.jpeg",
            role: "Utvikler",
          },
          {
            name: "Asbjørn Kallestad",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/605de756771a1.jpeg",
            role: "Utvikler",
          },
          {
            name: "Sivert Lundli",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6356e13ecf215.jpeg",
            role: "Utvikler",
          },
          {
            name: "Aaryan Neupane",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63480498f3eb0.jpeg",
            role: "Utvikler",
          },
          {
            name: "Heidi Therese Wiest",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6346d5cc4a72b.jpeg",
            role: "Utvikler",
          },
          {
            name: "Hans Tjøtta",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6356d83016ddb.jpeg",
            role: "Utvikler",
          },
          {
            name: "Jens Kulås",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6346d70d56a62.jpeg",
            role: "Utvikler",
          },
          {
            name: "Jakob Gløersen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6407122b9a583.jpeg",
            role: "Utvikler",
          },
          {
            name: "Julia Dai",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6407131bab385.jpeg",
            role: "Utvikler",
          },
          {
            name: "Ole Jacob Mellgren",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/640710bfb9602.jpeg",
            role: "Utvikler",
          },
          {
            name: "Filip Skaug",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/640712bcabc19.jpeg",
            role: "Utvikler",
          },
          {
            name: "Kaja Prestnes Lind",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6346def4754db.jpeg",
            role: "Utvikler",
          },
        ]}
      />

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-20">
        IT i Vektorprogrammet
      </div>

      <div className="grid md:grid-cols-2 ml-4 mr-4 mt-5 items-center mb-2">
        <div className="font-sans text-lg text-black place-content-start">
          <div className="text-start mx-5 mt-5">
            Siden oppstarten har Vektorprogrammet opplevd en kraftig vekst i
            antall vektorassistenter, ungdomsskoler som deltar i programmet og
            teammedlemmer som jobber med å drive Vektorprogrammet. Denne veksten
            fører med seg en del utfordringer knyttet til organisering av
            Vektorprogrammet, og vi i IT-teamet jobber kontinuerlig med å hjelpe
            organisasjonen til å fungere på best mulig måte.
          </div>

          <div className="font-sans text-lg text-black text-start mx-5 mt-5 mb-10">
            Vi jobber for alle avdelinger i Norge, men vi er lokalisert i
            Trondheim. Det betyr at vi får være med på alle sosiale
            arragangementer som Vektorprogrammet NTNU arrangerer!
          </div>
        </div>

        <img
          className="max-h-96 sm:max-w-sm h-auto content-center mx-auto"
          src="/images/team/IT-Tor.png"
        />
      </div>

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
        Arbeidet vårt
      </div>

      <div className="font-sans text-lg text-black text-left mx-5 mt-5">
        Vi jobber med webutvikling på alle ledd i stacken. I fjor var det store
        prosjektet å redesigne den offentlige siden fullstendig fra bunnen av. I
        år planlegger vi å utvikle et assistentdashboard, som skal ta
        vektorassistenter gjennom hele opptaksprosessen og videre utover i
        vervet deres. Som medlem i IT-teamet vil du da lære masse om
        frontendprogrammering i javascriptrammeverket Vue.js samt UX design og
        hvordan man utformer en progressive webapp. Vi skal også utvide DevOps
        stacken vår med et avansert, automatisk stagingsystem for å rapidly
        deploye betaversjoner av nettsiden. Dette skal vi gjøre i det raskt
        voksende programmeringsspråket Go.
      </div>

      <div className="font-sans text-lg text-black text-left mx-5 mt-5">
        Det her er bare en liten del av det vi har på agendaen og synes du noe
        av det høres spennende ut er det bare å sende oss en søknad! Du trenger
        ikke ha særlig kjennskap til noen av de overnevnte tingene, vi gir deg
        god oppfølging og hjelp!
      </div>

      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/IT/IT_V23.jpg"
          className="sm:max-w-2xl h-auto content-center mx-auto m-3 mt-10"
        />
      </div>

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
        Kjempegod erfaring
      </div>

      <div className="font-sans text-lg text-black text-left mx-5 mt-5">
        Vi tilbyr IT-erfaring på høyt nivå og med lav terskel. Erfaring med
        teamarbeid er noe alle arbeidsgivere er ute etter, og vi kan tilby dette
        i bøtter og spann. Du vil også tilegne deg kunnskap om state-of-the art
        webteknologi og utviklingsmetodikk, du vil bli en mester i git og
        kanskje til og med lære deg litt sysadminoppgaver hvis du skulle ønske å
        skitne til fingrene.
      </div>

      <div className="font-sans text-lg text-black text-left mx-5 mt-5">
        Er du kjent med minst én av disse tingene oppfordres du til å sende oss
        en søknad:
      </div>

      <div className="font-sans text-lg text-black mt-3">
        <ul className="ml-10 list-disc">
          <li>Grafisk design for web</li>
          <li>UI/UX-design</li>
          <li>Frontend utvikling</li>
          <li>Backend utvikling</li>
          <li>Testing</li>
          <li>Serveradministrering (Ubuntu)</li>
        </ul>
      </div>

      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/logosnew.png"
          className="sm:max-w-2xl h-auto content-center mx-auto m-3 mt-10"
        />
      </div>

      <div className="ml-4 mt-10 place-self-start font-sans text-lg text-black">
        Sjekk ut hva vi jobber med på{" "}
        <a
          href="https://github.com/vektorprogrammet"
          className="hover:underline text-vektor-darblue"
        >
          http://github.com/vektorprogrammet
        </a>
        !
      </div>
    </div>
  );
};

export default IT;
