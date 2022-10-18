export interface OmOssContent {
    title: string;
    cards: Array<TextPictureCard>;
  };
  
 export  interface TextPictureCard {
    title: string;
    text: string;
    image: {
      url: URL;
      alt: string;
    };
  }

  export default (): OmOssContent => {
    return {
      title: "Om vektorprogrammet",
      cards: [
        {
          title: "Motivere elever",
          text: `Vektorprogrammet ønsker å øke matematikkforståelsen blant elever i grunnskolen. 
          Forståelse gir mestringsfølelse som fører til videre motivasjon. 
          Siden matematikk er grunnlaget for alle realfag er målet at 
          dette også skal føre til motivasjon og videre utforskning av realfagene.`,
          image: {
            url: new URL(
              "https://vektorprogrammet.no/images/tormedmer.jpg?v=1598900041",
            ),
            alt: "Maskoten Tor",
          },
        },
        {
          title: "Motivere studenter",
          text: `Vi har som mål at alle studentene skal sitte igjen mer motivert for videre studier etter å ha vært vektorassistent.
           Av erfaring vet vi at muligheten til å formidle egen kunnskap og se at deres arbeid gir elevene mestringsfølelse er en sterk motivasjonsfaktor.
            Videre arrangerer vi både sosiale og faglige arrangementer for å forsterke denne motivasjonen.`,
          image: {
            url: new URL(
              "https://vektorprogrammet.no/images/membersV18.JPG?v=1598900041",
            ),
            alt: "Vektor samlet",
          },
        },
        {
          title: "En forsmak til læreryrket!",
          text: `Siden studentene er tilstede i undervisningen får de en introduksjon til læreryrket. 
          Mange som studerer realfag vurderer en fremtid som lærer, og får gjennom oss muligheten til å få reell erfaring.`,
          image: {
            url: new URL(
              "https://vektorprogrammet.no/images/nett.jpg?v=1598900041",
            ),
            alt: "Assistent erfaringer",
          },
        },
      ],
    };
  };