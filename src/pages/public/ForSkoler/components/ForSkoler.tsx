import BorderContentCard from "./BorderContentCard";
import PageParagraph from "./PageSection";
import PageTitleCard from "./PageTitleCard";

const ForSkoler = (): JSX.Element => {
  return (
    <div className="mx-auto p-4">
      <PageTitleCard
        title="Vektorassistenter i skolen"
        text={`Vektorprogrammet er en frivillig organisasjon 
        som tilbyr ungdomsskoler i Norge hjelpelærere 
        i matematikktimene. Her kan du enkelt søke om 
        å få studenter til å hjelpe og motivere elevene 
        i dine timer.`}
        imgPath={new URL("https://vektorprogrammet.no/images/teacher2.png")}
        alt="Lærer med assistenter"
        link={{
          text: "Send inn søknad her >",
          path: new URL("https://example.com"),
        }}
      />
      <div className="max-w-4xl mx-auto block">
        <PageParagraph
          key="Vektorassistenter i matteundervisning"
          title="Vektorassistenter i matteundervisning"
          text={[
            `Vektorprogrammet er Norges største organisasjon 
        som arbeider for å øke interessen for matematikk 
        og realfag blant elever i grunnskolen. Vi er en 
        studentorganisasjon som sender ut dyktige og 
        motiverte studenter til ungdomsskoler i norge.`,
            `Studentene fungerer som lærerens assistenter 
        og kan dermed bidra til at elevene raskere får 
        hjelp i timen, og at undervisningen blir mer 
        tilpasset de ulike elevgruppene. Vi har erfart 
        at lærerne ofte har mye å gjøre i timene, og 
        ofte ikke rekker å hjelpe alle elevene som står 
        fast. Derfor er vi overbevist om at to assistenter 
        kan forhindre mye hodebry for både lærere og elever. 
        Hvert år gjennomfører vi evalueringsundersøkelser, 
        og i gjennomsnitt sier over 95% av lærerne at de 
        er fornøyde med prosjektet og ønsker å delta videre.`,
            `Alle assistentene har vært gjennom en intervjuprossess 
        som gjør oss sikre på at de vil passe som 
        assistentlærere og kan være gode forbilder for 
        elevene. Dette er en unik mulighet til å få inn 
        rollemodeller i klasserommet som kan være med å 
        gi elevene mer motivasjon.`,
          ]}
        />
        <PageParagraph
          key="Enkelt å bruke assistenter i undervisningen"
          title="Enkelt å bruke assistenter i undervisningen"
          text={[
            "Assistentene kan brukes som hjelp i undervisningen. Her er noen forslag vi har gode erfaringer med:",
          ]}
        >
          <ul className="pl-4 ml-4 mb-3 list-disc dark:text-gray-300">
            {[
              "Hjelpe til med oppgaveløsing i klasserom",
              "Utfordre de sterkeste elevene med vanskeligere oppgaver",
              "Engasjere elever med matteleker, gåter og spill",
              "Arbeid med elever på grupperom",
            ].map((listItem) => (
              <li key={listItem} className=" text-lg">
                {listItem}
              </li>
            ))}
          </ul>
        </PageParagraph>
        <BorderContentCard
          title="Søk om å få assistenter til din skole"
          text={[
            `Ta kontakt med ansvarlig for skolekoordinering i din by 
          for å sende inn en søknad om å få vektorassistenter til din skole:`,
          ]}
        >
          <div>
            <table className="table-fixed divide-y divide-gray-300 text-base block overflow-x-auto border-t-2 border-b-2 dark:text-gray-300">
              <thead>
                <tr>
                  <th className="w-1/3 py-3 px-6">By</th>
                  <th className="w-1/3 py-3 px-6">E-Post</th>
                  <th className="w-1/3 py-3 px-6">Kontakt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {[
                  {
                    city: "Trondheim",
                    email: "styret.ntnu@vektorprogrammet.no",
                    url: "#",
                  },
                  { city: "Ås", email: "nmbu@vektorprogrammet.no", url: "#" },
                  { city: "Oslo", email: "Oslo@vektorprogrammet.no", url: "#" },
                  {
                    city: "Bergen",
                    email: "uib@vektorprogrammet.no",
                    url: "#",
                  },
                ].map(({ city, email, url }) => {
                  return (
                    <tr key={city}>
                      <td className="py-3 px-6">{city}</td>
                      <td className="py-3 px-6">
                        <a
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
                          href={`mailto:${email}`}
                        >
                          {email}
                        </a>
                      </td>
                      <td className="py-3 px-6">
                        <a
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
                          href={url}
                        >
                          Kontakt {city}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2 className="px-3 text-2xl text-gray-600 text-center font-bold mx-auto my-3 dark:text-gray-200">
              Har ikke Vektorprogrammet etablert seg i din by ennå?
            </h2>
            <p className="text-xl mb-3 px-3 mx-auto dark:text-gray-300">
              Ta kontakt med hovedstyret@vektorprogrammet.no for å melde din
              interesse!
            </p>
          </div>
        </BorderContentCard>
      </div>
    </div>
  );
};

export default ForSkoler;
