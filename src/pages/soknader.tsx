// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function MineSoknader() {
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
}

function ProfileModal({ imgUrl, name }: { imgUrl: string; name: string }) {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt="Aaryan"
          className="max-w-sm mt-2 rounded-full w-1/2"
        />
      </div>
      <p className=" text-gray-600 text-m font-medium mt-2">
        Du er logget inn som
      </p>
      <h2 className="text-2xl font-medium text-vektor-darblue pb-2">{name}</h2>
    </div>
  );
}

function Applications({
  applications,
}: {
  applications: Array<{
    role: string;
    status: string;
    expectedAction: string;
  }>;
}) {
  return (
    <div className="flex flex-col justify-center mt-2">
      {applications.map((application) => {
        return (
          <div
            key={application.toString()}
            className="border-2 border-gray-200 shadow-md mt-4 max-w-lg mx-4 p-2 rounded-sm"
          >
            <h1 className="text-2xl font-medium text-vektor-darblue mt-2">
              {application.role}
            </h1>
            <p className="text-gray-600 text-m font-medium mt-2">
              <span className="font-bold">Status:</span> {application.status}
            </p>
            <p className="text-gray-600 text-m font-medium my-2">
              <span className="font-bold">Forventet Handling:</span>{" "}
              {application.expectedAction}
            </p>
          </div>
        );
      })}
    </div>
  );
}
