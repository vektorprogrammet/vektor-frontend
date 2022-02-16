import { TextPictureCard } from "api/ForForeldre";
import ImageCard from "components/Pages/TextPictureCard";
import React from "react";

const OmOss = (): JSX.Element => {
  return <div className="max-w-screen-lg mt-20 mb-20 mx-auto flex flex-col items-center">
      <h1 className="max-w-2xl text-gray-600 text-4xl text-center font-bold mx-3">
        {"Om Vektorprogrammet"}
      </h1>
      <p className="max-w-2xl text-center mt-4 mb-20 text-xl mx-3">{
        `
        Vektorprogrammet arbeider for å øke interessen for matematikk 
        og realfag blant elever i grunnskolen. Vi er en nasjonal studentorganisasjon
         som sender studenter med god realfagskompetanse til skoler
          for å hjelpe elevene i matematikktimene. Disse
           studentene har også gode pedagogiske evner og
            er gode rollemodeller – de er Norges realfagshelter.
        `        
      }</p>
      {cards.map(({ title: cardTitle, text, image, pictureOnLeft=false }) => (
        <ImageCard
          key={cardTitle}
          title={cardTitle}
          text={text}
          imgPath={image.url}
          alt={image.alt}
          pictureOnLeft={pictureOnLeft}
        />
      ))}
       <h1 className=" mt-28 max-w-2xl text-gray-600 text-4xl text-center font-bold mx-3">
        {"Om Vektorprogrammet"}
      </h1> 
      <p className="max-w-2xl text-center mt-20 text-xl mx-auto">
        {`Siden studentene er tilstede i
         undervisningen får de en introduksjon til
          læreryrket. Mange som studerer realfag
           vurderer en fremtid som lærer,
            og får gjennom oss muligheten til
             å få reell erfaring.`}
      </p>
      <img src="https://vektorprogrammet.no/images/nett.jpg?v=1598900041"/>
    </div>
};


interface TextAndPicture {
  title: string;
  text: string;
  image: {
    url: URL;
    alt: string;
  };
  pictureOnLeft?: boolean;
}

const cards: TextAndPicture[] = [
  {title: "Motivere elever", text: `Vektorprogrammet ønsker å øke
   matematikkforståelsen blant elever i grunnskolen. Forståelse
    gir mestringsfølelse som fører til videre motivasjon. Siden
     matematikk er grunnlaget for alle realfag er målet at dette
      også skal føre til motivasjon og videre utforskning av realfagene.`,
    image: {url: new URL("https://vektorprogrammet.no/images/tormedmer.jpg?v=1598900041"), alt: "Kosing med Tor."}
    },
    {
      title: "Motivere studenter", text: `Vi har som mål at alle studentene skal 
      sitte igjen mer motivert for videre studier 
      etter å ha vært vektorassistent. Av erfaring 
      vet vi at muligheten til å formidle egen kunnskap
       og se at deres arbeid gir elevene 
       mestringsfølelse er en sterk motivasjonsfaktor. Videre arrangerer
        vi både sosiale og faglige arrangementer for å
         forsterke denne motivasjonen.`,
         image: {
           url: new URL("https://vektorprogrammet.no/images/membersV18.JPG?v=1598900041"), alt: "Samlede vektormedlemmer."
         },
         pictureOnLeft: true
    }
]

export default OmOss;
