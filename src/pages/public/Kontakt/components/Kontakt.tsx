import KontaktCard from "./KontaktCard";
import Tabs from "./KontaktOss.js";

const kontaktInfo = {
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
const Kontakt = (): JSX.Element => {
  return (
    <div className="max-w-6xl mt-10 mb-20 mx-auto flex flex-col items-center">
      <KontaktCard
        key={kontaktInfo.card.title}
        title={kontaktInfo.card.title}
        text={kontaktInfo.card.text}
        alt={kontaktInfo.card.image.alt}
        imgPath={kontaktInfo.card.image.url}
      />
      <h1 className="max-w-lg text-gray-600 text-5xl text-center font-bold mx-auto mt-10 mb-10 dark:text-gray-200">
        {kontaktInfo.title}
      </h1>
      <Tabs
        divisions={[
          { name: "Trondheim", number: 1 },
          { name: "Ås", number: 2 },
          { name: "Bergen", number: 3 },
          { name: "Hovedstyret", number: 4 },
        ]}
      />
    </div>
  );
};

export default Kontakt;
