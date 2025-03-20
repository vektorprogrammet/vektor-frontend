interface AssistentMotivationCard {
  title: string;
  text: string;
  image: {
    url: URL;
    alt: string;
  };
}

interface ForAssistenterContent {
  title: string;
  ingress: string;
  cards: Array<AssistentMotivationCard>;
}

// Lag et card for elementene på forrige side

// TODO: This data should be fetched from backend later
export function getAssistenter(): ForAssistenterContent {
  return {
    title: "Assistenter",
    ingress: `Vektorassistent er et frivillig verv der du reiser til en ungdomsskole
       én dag i uka for å hjelpe til som lærerassistent i matematikk.
       En stilling som vektorassistent varer i 4 eller 8 uker, og du kan selv velge
       hvilken ukedag som passer best for deg.`,

    cards: [
      {
        title: "Vær et forbilde",
        text:
          "Som vektorassistent er du med på å gjøre matte gøy." +
          " Ditt engasjement kan bidra til økt motivasjon og lærelyst. Bli med og gjør en forskjell!",
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/graduation.svg?v=1598900041",
          ),
          alt: "vær et forbilde",
        },
      },

      {
        title: "Sosialt",
        text:
          "Alle assistenter blir invitert til arrangementer som f.eks. fester," +
          " populærforedrag, bowling, grilling i parken, gokart og paintball.",
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/calendar.svg?v=1598900041",
          ),
          alt: "Sosiale",
        },
      },

      {
        title: "Fint å ha på CVen",
        text: "Erfaring som arbeidsgivere setter pris på. Alle assistenter får en attest.",
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/certificate.svg?v=1598900041",
          ),
          alt: "fint å ha på cven",
        },
      },
    ],
  };
}
