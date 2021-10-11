import React from "react";
import KontaktCard from "components/Pages/KontaktCard";
import getContent from "api/Kontakt";

const Kontakt = (): JSX.Element => {
  const { title, card } = getContent();
  return (
    <div className="max-w-screen-lg mt-10 mb-20 mx-auto ml-2 flex flex-col items-center">
      <KontaktCard
        key={card.title}
        title={card.title}
        text={card.text}
        alt={card.image.alt}
        imgPath={card.image.url}
      />
      <h1 className="max-w-2xl text-gray-600 text-5xl text-center font-bold ml-40 mt-10 mb-10">
        {title}
      </h1>
    </div>
  );
};

export default Kontakt;
