// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function MineSoknader() {
  return (
    <div className="mb-10 flex w-full justify-center">
      <div className="col-12 text-center">
        <h1 className="mt-14 pt-4 pb-2 font-medium text-4xl text-vektor-darblue md:mt-0">
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
          className="mt-2 w-1/2 max-w-sm rounded-full"
        />
      </div>
      <p className=" mt-2 font-medium text-gray-600 text-m">
        Du er logget inn som
      </p>
      <h2 className="pb-2 font-medium text-2xl text-vektor-darblue">{name}</h2>
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
    <div className="mt-2 flex flex-col justify-center">
      {applications.map((application) => {
        return (
          <div
            key={application.toString()}
            className="mx-4 mt-4 max-w-lg rounded-sm border-2 border-gray-200 p-2 shadow-md"
          >
            <h1 className="mt-2 font-medium text-2xl text-vektor-darblue">
              {application.role}
            </h1>
            <p className="mt-2 font-medium text-gray-600 text-m">
              <span className="font-bold">Status:</span> {application.status}
            </p>
            <p className="my-2 font-medium text-gray-600 text-m">
              <span className="font-bold">Forventet Handling:</span>{" "}
              {application.expectedAction}
            </p>
          </div>
        );
      })}
    </div>
  );
}
