export interface TextPictureCard {
  title: string;
  text: string;
  image: {
    url: URL;
    alt: string;
  };
}
export interface ForForeldreContent {
  title: string;
  ingress: string;
  cards: Array<TextPictureCard>;
  bottomText: string;
}

export default (): ForForeldreContent => {
  return {
    title: "Informasjon for foreldre",
    ingress:
      "Lurer du som forelder på mer om Vektorprogrammet? Her finner du informasjon om våre assistenter, kvalitetssikring, og foreldrekurs.",
    cards: [
      {
        title: "Assistentene",
        text: `Et verv som assistent hos Vektorprogrammet er 
        ettertraktet blant studenter. Det gjør at vi kan håndplukke 
        de aller beste til jobben. De er faglig sterke, som 
        brenner for matematikk. I tillegg har alle assistentene 
        våre vært gjennom et forberedelseskurs før de blir 
        utplassert på skolene. Du kan derfor være sikker på 
        at assistentene våre gjør en god jobb.`,
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/assistants_foreldre.jpg",
          ),
          alt: "Vektor samlet",
        },
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
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/assistenter.jpg",
          ),
          alt: "Under møte",
        },
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
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/vektorassistent.jpg",
          ),
          alt: "Undervisning i klasserommet",
        },
      },
    ],
    bottomText:
      "Påmeldingsskjemaet er under konstruksjon! Ta kontakt med skolekoordineringsteamet for påmelding til eventuelle foreldrekurs.",
  };
};
