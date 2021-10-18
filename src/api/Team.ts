export interface TeamCard {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  image: {
    url: URL;
    alt: string;
  };
}
export interface TeamContent {
  title: string;
  card: TeamCard;
}

export default (): TeamContent => {
  return {
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
};
