import TeamTemplate from "../TeamTemplate";

const Evaluering = (): JSX.Element => {
  return (
    <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col items-center">
      <TeamTemplate
        name="Evaluering"
        mail="evaluering.ntnu@vektorprogrammet.no"
        text="Vi sender ut spørreundersøkelser, lager statistikk av dem og skriver så semester- og årsrapporter."
        members={[
          {
            name: "Hannes Witt",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/634926da1a3a6.jpeg",
            role: "Leder",
          },
          {
            name: "Emma Dyvesveen Myrbekk",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/634926c5a6400.jpeg",
            role: "Medlem",
          },
          {
            name: "Tinus Øen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/63492623842a1.jpeg",
            role: "Medlem",
          },
          {
            name: "Maja Christine Stahl",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/640714155162e.jpeg",
            role: "Medlem",
          },
        ]}
      />

      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/Evaluering/Teambildet.jpg"
          className="sm:max-w-2xl h-auto content-center mx-auto m-3 mt-20"
        />
      </div>

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
        Arbeidet vårt
      </div>

      <div className="font-sans text-lg text-black text-left m-5">
        Evalueringsteamet lager hovedsaklig spørreundersøkelser for
        vektorassistenter, elever, lærere, samt foreldre som deltok på
        semesterets foreldrekurs. Å få tilbakemeldinger gjennom disse
        undersøkelsene er viktig for å kunne forbedre Vektorprogrammet. Når vi
        får svar på undersøkelsene, bruker vi statistikken fra undersøkelsene
        til å skrive rapporter. På denne måten får vi en god oversikt over hva
        som fungerer bra ved Vektorprogrammet og hva som bør forbedres til neste
        semester. På slutten av hvert semester skriver vi en rapport som
        oppsummerer arbeidet til Vektorprogrammet gjort foregående semester og
        mål for det neste semesteret. Vi skriver også en promorapport som sendes
        til sponsorer av Vektorprogrammet for å vise hva vi har oppnådd gjennom
        året. Når denne rapporten lages bruker vi InDesign.
      </div>

      <div className="flex flex-wrap justify-center sm:space-x-8 ml-4 mr-4">
        <div className="m-auto object-contain">
          <img
            src="https://vektorprogrammet.no/images/team_images/trapp_bygg.jpg"
            className="max-h-80 sm:max-w-md content-center mx-auto m-5 mt-15"
          />
        </div>

        <div className="m-auto object-contain">
          <img
            src="https://vektorprogrammet.no/images/team_images/trapp_park.jpg"
            className="max-h-96 sm:max-w-xs content-center mx-auto m-5 mt-15"
          />
        </div>
      </div>

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
        Sosialt i evaluering
      </div>

      <div className="font-sans text-lg text-black text-left m-5">
        Vi har hyggelige og spennende arrangementer både innad i teamet og
        sammen med de andre teamene i Vektorprogrammet. Vi i evaluering har vært
        ute og spist sammen, og arrangert pizza- og spillkveld. Det skjer også
        mye sosialt på tvers av team, blant annet hytteturer, tema-fester,
        17.mai-feiring, Gokart og LazerTag. Jevnlig utover semesteret arrangeres
        det TeamSosial, der hvert team inviterer to andre team til en sosial
        sammenkomst.
      </div>

      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/20200831_175600.jpg"
          className="sm:max-w-2xl h-auto content-center mx-auto m-3 mt-3"
        />
      </div>

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-10">
        Opptak
      </div>

      <div className="font-sans text-lg text-black m-5">
        Et verv i evalueringsteamet innebærer ca. 2 timer arbeid i uka. Vi blir
        enige innad i teamet om et fast ukentlig møtetidspunkt som passer for
        alle medlemmene, og vi har ikke møter i eksamensperioden. Gjennom hele
        året arrangeres det mange sosiale aktiviteter man kan være med på, og
        man står på stand minst to gang si rekrutteringsperiodene.
      </div>

      <div className="grid md:grid-cols-2 ml-4 mr-4 mt-4">
        <div className="font-sans text-lg text-black place-content-start">
          <div className="mb-2 mt-4">Appellerer punktene under til deg?</div>
          <ul className="ml-10 list-disc">
            <li>
              Være en del av Vektorprogrammet og bidra til å inspirere ungdom
              til å studere realfag
            </li>
            <li>Ta del i studentfrivilligheten</li>
            <li>Utforme undersøkelser, lage statistikk og skrive rapporter</li>
            <li>
              Skrive i tekstbehandlingssystemet LaTeX (ingen forkunnskaper
              nødvendig)
            </li>
            <li>
              Ha et sosialt verv der man får venner fra ulike linjer og kull
            </li>
            <li>Få en relevant attest til senere jobbsøking</li>
          </ul>
          <div className="my-6">Da er evalueringsteamet stedet for deg!</div>
        </div>

        <img
          className="max-h-96 sm:max-w-sm h-auto content-center mx-auto"
          src="/images/team/EvalueringTor.png"
        />
      </div>

      <div className="ml-4 mt-10 place-self-start font-sans text-lg text-black">
        Dersom du har noen spørsmål er det bare å ta kontakt med oss på{" "}
        <a
          className="hover:underline text-vektor-darblue break-all"
          href="mailto:evaluering.ntnu@vektorprogrammet.no"
        >
          evaluering.ntnu@vektorprogrammet.no.
        </a>
      </div>
    </div>
  );
};

export default Evaluering;
