export interface KontaktCard {
  title: string;
  text: string;
  image: {
    url: URL;
    alt: string;
  };
}
export interface KontaktContent {
  title: string;
  card: KontaktCard;
}

export default (): KontaktContent => {
  return {
    title: "Kontakt oss",
    card: {
      title: "Organisasjonen",
      text: "Vektorprogrammet er en stor organisasjon med assistenter i 4 norske byer. Under kan du kontakte vektorprogrammet i nærmeste by eller hovedstyret for generelle henvendelser.",
      image: {
        url: new URL(
          "https://vektorprogrammet.no/images/organizationstructure.png",
        ),
        alt: "Organisasjonsstruktur",
      },
    },
  };
};
