import Applications from "./Applications";
import ProfileModal from "./ProfileModal";

const MineSoknader = (): JSX.Element => {
  return (
    <div className="flex justify-center mb-10 w-full">
      <div className="col-12 text-center">
        <h1 className="text-4xl font-medium text-vektor-darblue pb-2 pt-4 md:mt-0 mt-14">
          Mine Søknader
        </h1>
        <ProfileModal
          imgUrl="https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644805d1e8ef2.jpeg"
          name="Aaryan Neupan"
        />
        <Applications
          applications={[
            {
              role: "IT-leder Høst 2024",
              status: "Avslått",
              expectedAction:
                "Ingen videre handling er nødvendig. Du vil ikke bli leder for IT høsten 2024.",
            },
            {
              role: "Vektorassistent Høst 2023",
              status: "Under vurdering",
              expectedAction: "Vente på svar",
            },
            {
              role: "Vektorassistent Vår 2022",
              status: "Innvilget",
              expectedAction: "Vente på mail med videre informasjon",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MineSoknader;
