import type { TextPictureParagraphAPIProps } from "@/components/TextPictureParagraph";

export interface OmOssContent {
  title: string;
  ingress: string;
  bottomText: string;
  bottomHeader: string;
  bottomImage: {
    url: URL;
    alt: string;
  };
  cards: Array<TextPictureParagraphAPIProps>;
}
export default (): OmOssContent => {
  return {
    title: "Om Vektorprogrammet",
    ingress: `Vektorprogrammet arbeider for å øke interessen for matematikk 
        og realfag blant elever i grunnskolen. Vi er en nasjonal studentorganisasjon
        som sender studenter med god realfagskompetanse til skoler
        for å hjelpe elevene i matematikktimene. Disse
        studentene har også gode pedagogiske evner og
        er gode rollemodeller – de er Norges realfagshelter.
          `,
    bottomHeader: "En forsmak til læreryrket!",
    bottomText: `Siden studentene er tilstede i
          undervisningen får de en introduksjon til
          læreryrket. Mange som studerer realfag
          vurderer en fremtid som lærer,
          og får gjennom oss muligheten til
          å få reell erfaring.`,
    bottomImage: {
      url: new URL("https://vektorprogrammet.no/images/nett.jpg?v=1598900041"),
      alt: "",
    },
    cards: [
      {
        title: "Motivere elever",
        text: `Vektorprogrammet ønsker å øke
       matematikkforståelsen blant elever i grunnskolen. Forståelse
        gir mestringsfølelse som fører til videre motivasjon. Siden
         matematikk er grunnlaget for alle realfag er målet at dette
          også skal føre til motivasjon og videre utforskning av realfagene.`,
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/tormedmer.jpg?v=1598900041",
          ),
          alt: "Kosing med Tor.",
        },
      },
      {
        title: "Motivere studenter",
        text: `Vi har som mål at alle studentene skal 
          sitte igjen mer motivert for videre studier 
          etter å ha vært vektorassistent. Av erfaring 
          vet vi at muligheten til å formidle egen kunnskap
           og se at deres arbeid gir elevene 
           mestringsfølelse er en sterk motivasjonsfaktor. Videre arrangerer
            vi både sosiale og faglige arrangementer for å
             forsterke denne motivasjonen.`,
        image: {
          url: new URL(
            "https://vektorprogrammet.no/images/membersV18.JPG?v=1598900041",
          ),
          alt: "Samlede vektormedlemmer.",
        },
      },
    ],
  };
};
