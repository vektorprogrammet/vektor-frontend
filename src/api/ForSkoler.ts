export interface ForSkolerContent {
  title: string;
  ingress: string;
  link: {
    text: string;
    path: URL;
  };
  img: {
    path: URL;
    alt: string;
  };
  content: Array<Content>;
  cityContactsContent: CityContactsContent;
}
interface Content {
  title: string;
  text: Array<string>;
  list?: Array<string>;
}

interface CityContactsContent {
  title: string;
  text: Array<string>;
  table: Array<{
    city: string;
    email: string;
    url: string;
  }>;
  bottomTitle: string;
  bottomText: string;
}

// TODO: This data should be fetched from backend later
export default (): ForSkolerContent => {
  return {
    title: "Vektorassistenter i skolen",
    ingress: `Vektorprogrammet er en frivillig organisasjon 
      som tilbyr ungdomsskoler i Norge hjelpelærere 
      i matematikktimene. Her kan du enkelt søke om 
      å få studenter til å hjelpe og motivere elevene 
      i dine timer.`,
    link: {
      text: "Send inn søknad her >",
      path: new URL("#jumbo"),
    },
    img: {
      path: new URL("https://vektorprogrammet.no/images/teacher2.png"),
      alt: "Lærer med assistenter",
    },
    content: [
      {
        title: "Vektorassistenter i matteundervisning",
        text: [
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
        ],
      },
      {
        title: "Enkelt å bruke assistenter i undervisningen",
        text: [
          "Assistentene kan brukes som hjelp i undervisningen. Her er noen forslag vi har gode erfaringer med:",
        ],
        list: [
          "Hjelpe til med oppgaveløsing i klasserom",
          "Utfordre de sterkeste elevene med vanskeligere oppgaver",
          "Engasjere elever med matteleker, gåter og spill",
          "Arbeid med elever på grupperom",
        ],
      },
    ],
    cityContactsContent: {
      title: "Søk om å få assistenter til din skole",
      text: [
        `Ta kontakt med ansvarlig for skolekoordinering i din by 
      for å sende inn en søknad om å få vektorassistenter til din skole:`,
      ],
      table: [
        {
          city: "Trondheim",
          email: "styret.ntnu@vektorprogrammet.no",
          url: "#",
        },
        { city: "Ås", email: "nmbu@vektorprogrammet.no", url: "#" },
        { city: "Oslo", email: "Oslo@vektorprogrammet.no", url: "#" },
        { city: "Bergen", email: "uib@vektorprogrammet.no", url: "#" },
      ],
      bottomTitle: "Har ikke Vektorprogrammet etablert seg i din by ennå?",
      bottomText:
        "Ta kontakt med hovedstyret@vektorprogrammet.no for å melde din interesse!",
    },
  };
};
