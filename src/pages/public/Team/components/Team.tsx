import React from "react";
import TeamCard from "./TeamCard";

const teamInfo = {
  title: "Våre team",
  card: {
    title: "Styre og team",
    text1:
      "Vektorprogrammet er en stor organisasjon med assistenter i 4 norske byer. Vi trenger derfor mange frivillige bak kulissene som kan få hjulene til å gå rundt. Uten Vektorprogrammets 15 team hadde dette aldri gått an!",
    text2: "Kunne du tenkt deg et team-verv hos oss?",
    text3: "Les mer om de ulike teamene nedenfor!",
    image: {
      url: new URL("https://vektorprogrammet.no/images/departments_map.png"),
      alt: "Team",
    },
  },
};

const Team = (): JSX.Element => {
  return (
    <div className="max-w-screen-lg mt-10 mb-20 mx-auto ml-2 flex flex-col items-center">
      <TeamCard
        key={teamInfo.card.title}
        title={teamInfo.card.title}
        text1={teamInfo.card.text1}
        text2={teamInfo.card.text2}
        text3={teamInfo.card.text3}
        alt={teamInfo.card.image.alt}
        imgPath={teamInfo.card.image.url}
      />
      <h1 className="max-w-2xl text-gray-600 text-5xl text-center font-bold ml-40 mt-10 mb-10">
        {teamInfo.title}
      </h1>
    </div>
  );
  // return <article className="container"><h1>Siden for team</h1></article>;
};

export default Team;
