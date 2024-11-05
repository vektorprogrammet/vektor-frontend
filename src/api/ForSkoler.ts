export interface TextPictureCard {
    title: string;
    text: string;
    image: {
      url: URL;
      alt: string;
    };
  }
  export interface TextCard {
    title: string;
    text: string;
  }
  export interface ForForeldreContent {
    title: string;
    ingress: string;
    cards: Array<TextCard>;
    bottomText: string;
  }
  
  export default (): ForForeldreContent => {
    return {
      title: "Vektorassistenter i skolen",
      ingress:
        `Vektorprogrammet er en frivillig organisasjon som tilbyr ungdomsskoler i Norge hjelpelærere i matematikktimene. Her kan du enkelt søke om å få 
        studenter til å hjelpe og motivere elevene i dine timer.`,
      cards: [
        {
            title: "Vektorassistenter i matteundervisning",
            text: `Vektorprogrammet er Norges største organisasjon 
        som arbeider for å øke interessen for matematikk 
        og realfag blant elever i grunnskolen. Vi er en 
        studentorganisasjon som sender ut dyktige og 
        motiverte studenter til ungdomsskoler i norge.\n\n
        Studentene fungerer som lærerens assistenter 
        og kan dermed bidra til at elevene raskere får 
        hjelp i timen, og at undervisningen blir mer 
        tilpasset de ulike elevgruppene. Vi har erfart 
        at lærerne ofte har mye å gjøre i timene, og 
        ofte ikke rekker å hjelpe alle elevene som står 
        fast. Derfor er vi overbevist om at to assistenter 
        kan forhindre mye hodebry for både lærere og elever. 
        Hvert år gjennomfører vi evalueringsundersøkelser, 
        og i gjennomsnitt sier over 95% av lærerne at de 
        er fornøyde med prosjektet og ønsker å delta videre.\n
        Alle assistentene har vært gjennom en intervjuprossess 
        som gjør oss sikre på at de vil passe som 
        assistentlærere og kan være gode forbilder for 
        elevene. Dette er en unik mulighet til å få inn 
        rollemodeller i klasserommet som kan være med å 
        gi elevene mer motivasjon.
        `
        },
        {
          title: "Foreldrekurs",
          text: `Foreldrekurs foregår på kveldstid, og er 
          rettet mot foreldre. Dette blir arrangert 1-3 ganger 
          i året av skolekoordineringsteamet i Vektorprogrammet Trondheim. 
          Dette er et tiltak for foreldre ved Vektorprogrammets samarbeidsskoler - 
          slik at dere får et enda bedre grunnlag for å kunne hjelpe deres ungdommer 
          med matematikken på hjemmebane.
          \n
          Kursene blir vanligvis holdt i Realfagsbygget på NTNU Gløshaugen, med lett bespisning (kaffe, kaker, kjeks).`,
        },
        {
          title: "Hvorfor foreldrekurs?",
          text: `Målet er at foreldre skal kunne hjelpe barnet 
          sitt med matematikk, og lære om hvorfor matematikk 
          er et så viktig og spennende fag. Det har tidligere 
          blitt holdt kurs innen innføring i motivasjon, 
          pedagogikk og matematikk tilpasset ungdomsskolenivå. 
          Eksamenskurs, der det har blitt gjennomgått 
          gamle eksamensoppgaver, har også blitt holdt tidligere.
          \n
          Høres foreldrekurset interessant ut?`,
        },
      ],
      bottomText:
        "Påmeldingsskjemaet er under konstruksjon! Ta kontakt med skolekoordineringsteamet for påmelding til eventuelle foreldrekurs.",
    };
  };
  