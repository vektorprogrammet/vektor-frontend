import { Divider } from "@/components/Divider";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function ForSkoler() {
  const goToContact = (url: string) => () => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="leading-relaxed font-sans flex flex-col justify-center items-center dark:text-text-dark mt-10 gap-3 md:gap-5 mx-5">
        <div className="flex flex-col gap-3 md:gap-5">
          <h1 className="max-w-3xl text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
            Vektorassistenter i skolen
          </h1>
          <div className="max-w-3xl text-md md:text-lg">
            {/* alle p's arver className fra div */}
            <p className="max-w-3xl text-md md:text-lg">
              Vektorprogrammet er en frivillig organisasjon som tilbyr
              ungdomsskoler i Norge hjelpelærere i matematikktimene. Her kan du
              enkelt søke om å få studenter til å hjelpe og motivere elevene i
              dine timer.
            </p>
            <Divider />
            <br />
            <p>
              Vektorprogrammet er Norges største organisasjon som arbeider for å
              øke interessen for matematikk og realfag blant elever i
              grunnskolen. Vi er en studentorganisasjon som sender ut dyktige og
              motiverte studenter til ungdomsskoler i Norge.
            </p>
            <br />
            <img
              src="/images/teacher2.png"
              alt="Teacher"
              className="justify-center md:justify-between items-center gap-5 md:gap-14 flex-wrap md:flex-nowrap w-1/2 mx-auto"
            />
            <br />
            <p>
              Studentene fungerer som lærerens assistenter og kan dermed bidra
              til at elevene raskere får hjelp i timen, og at undervisningen
              blir mer tilpasset de ulike elevgruppene. Vi har erfart at lærerne
              ofte har mye å gjøre i timene, og ofte ikke rekker å hjelpe alle
              elevene som står fast. Derfor er vi overbevist om at to
              assistenter kan forhindre mye hodebry for både lærere og elever.
            </p>
            <br />
            <p>
              Hvert år gjennomfører vi evalueringsundersøkelser, og i
              gjennomsnitt sier over 95% av lærerne at de er fornøyde med
              prosjektet og ønsker å delta videre.
            </p>
            <br />
            <p>
              Alle assistentene har vært gjennom en intervjuprossess som gjør
              oss sikre på at de vil passe som assistentlærere og kan være gode
              forbilder for elevene. Dette er en unik mulighet til å få inn
              rollemodeller i klasserommet som kan være med å gi elevene mer
              motivasjon.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="info-background py-48 flex flex-col items-center p-5 mb-20 mx-auto gap-5 md:gap-5 text-vektor-bg">
        <h3 className="max-w-3xl text-vektor-bg text-2xl md:text-4xl text-center font-bold">
          Enkelt å bruke assistenter i undervisningen
        </h3>
        <p className="max-w-3xl md:max-w-2xl text-md md:text-xl mt-5">
          Assistentene kan brukes som hjelp i undervisningen. Her er noen
          forslag vi har gode erfaringer med:
        </p>
        <div className="md:max-w-2xl md:w-full">
          <ul className="text-md md:text-xl list-disc ml-5">
            <li className="py-1">Hjelpe til med oppgaveløsing i klasserom</li>
            <li className="py-1">
              Utfordre de sterkeste elevene med vanskeligere oppgaver
            </li>
            <li className="py-1">
              Engasjere elever med matteleker, gåter og spill
            </li>
            <li className="py-1">Arbeid med elever på grupperom</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center p-5 mt-40 mb-20 mx-auto gap-10 md:gap-10 dark:text-text-dark max-w-80 md:max-w-none">
        <div className="flex flex-col gap-3 md:gap-5">
          <h1 className="max-w-3xl text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
            Søk om å få assistenter til din skole
          </h1>
          <p className="max-w-3xl text-md md:text-lg">
            Ta kontakt med ansvarlig for skolekoordinering i din by for å sende
            inn en søknad om å få vektorassistenter til din skole.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <p className="max-w-3xl text-md md:text-lg">
            Ta kontakt med ansvarlig for skolekoordinering i din by for å sende
            inn en søknad om å få vektorassistenter til din skole.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          {[
            {
              city: "Trondheim",
              url: "#",
            },
            {
              city: "Ås",
              url: "#",
            },
            {
              city: "Bergen",
              url: "#",
            },
          ].map(({ city, url }) => {
            return (
              <button
                type="button"
                onClick={goToContact(url)}
                className="btn btn-success text-white my-2 text-lg py-2 px-4 w-48 md:mx-6"
              >
                {city}
              </button>
            );
          })}
        </div>
        <div>
          <h2 className="max-w-3xl text-vektor-DARKblue text-xl md:text-2xl text-center font-bold dark:text-text-dark">
            Har ikke Vektorprogrammet etablert seg i din by enda?
          </h2>
          <p className="max-w-3xl text-md md:text-lg my-4 md:text-center">
            Ta kontakt med <a href="#">hovedstyret</a> for å melde din
            interesse!
          </p>
        </div>
      </div>
    </div>
  );
}
