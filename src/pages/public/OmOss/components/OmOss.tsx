import React from "react";
import TextPictureCard from "components/Pages/TextPictureCard";
import getContent from "api/OmOss";


const OmOss = (): JSX.Element => {
  const {
    title, cards
  } = getContent()
  return (

    <div className = "max-w-screen-lg mt-10 mb-20 mx-auto flex flex-col items-center"> 
    <h1 className="max-w-2xl text-sky-300 text-4xl text-center font-bold mx-3">
      {title}
    </h1>
    <p className="max-w-4xl text-center mt-4 mb-20 text-xl mx-3">
    Vektorprogrammet arbeider for å øke interessen for matematikk og realfag blant elever i grunnskolen. Vi er en nasjonal 
    studentorganisasjon som sender studenter med god realfagskompetanse til skoler for å hjelpe elevene i matematikktimene. 
    Disse studentene har også gode pedagogiske evner og er gode rollemodeller <strong> - de er Norges realfagshelter. </strong>
    </p>
    {cards.map(({ title: cardTitle, text, image }) => (
      <TextPictureCard
      key={cardTitle}
      title= {cardTitle}
      text={text}
      imgPath={image.url}
      alt={image.alt}
      />
      ))}
      </div>
  );

};

export default OmOss;
