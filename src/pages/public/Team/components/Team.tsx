import React from "react";
import getContent from "api/Team";
import TeamCard from "./TeamCard";

const Team = (): JSX.Element => {
  const { title, card } = getContent();
  return (
    <div className="max-w-screen-lg mt-10 mb-20 mx-auto ml-2 flex flex-col items-center">
      <TeamCard
        key={card.title}
        title={card.title}
        text1={card.text1}
        text2={card.text2}
        text3={card.text3}
        alt={card.image.alt}
        imgPath={card.image.url}
      />
      <h1 className="max-w-2xl text-gray-600 text-5xl text-center font-bold ml-40 mt-10 mb-10">
        {title}
      </h1>
    </div>
  );
  // return <article className="container"><h1>Siden for team</h1></article>;
};

export default Team;
