import BorderContentCard from "./BorderContentCard";
import PageParagraph from "./PageSection";
import PageTitleCard from "./PageTitleCard";

const ForSkoler = (): JSX.Element => {
  return (
    <div className="mx-auto p-4">
        <BorderContentCard
          title="Søk om å få assistenter til din skole"
          text={[
            `Ta kontakt med ansvarlig for skolekoordinering i din by 
          for å sende inn en søknad om å få vektorassistenter til din skole:`,
          ]}
        >
          <div>
            <table className="table-fixed divide-y divide-gray-300 text-base block overflow-x-auto border-t-2 border-b-2 dark:text-gray-300">
              <thead>
                <tr>
                  <th className="w-1/3 py-3 px-6">By</th>
                  <th className="w-1/3 py-3 px-6">E-Post</th>
                  <th className="w-1/3 py-3 px-6">Kontakt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {[
                  {
                    city: "Trondheim",
                    email: "styret.ntnu@vektorprogrammet.no",
                    url: "#",
                  },
                  { city: "Ås", email: "nmbu@vektorprogrammet.no", url: "#" },
                  { city: "Oslo", email: "Oslo@vektorprogrammet.no", url: "#" },
                  {
                    city: "Bergen",
                    email: "uib@vektorprogrammet.no",
                    url: "#",
                  },
                ].map(({ city, email, url }) => {
                  return (
                    <tr key={city}>
                      <td className="py-3 px-6">{city}</td>
                      <td className="py-3 px-6">
                        <a
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
                          href={`mailto:${email}`}
                        >
                          {email}
                        </a>
                      </td>
                      <td className="py-3 px-6">
                        <a
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100"
                          href={url}
                        >
                          Kontakt {city}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2 className="px-3 text-2xl text-gray-600 text-center font-bold mx-auto my-3 dark:text-gray-200">
              Har ikke Vektorprogrammet etablert seg i din by ennå?
            </h2>
            <p className="text-xl mb-3 px-3 mx-auto dark:text-gray-300">
              Ta kontakt med hovedstyret@vektorprogrammet.no for å melde din
              interesse!
            </p>
          </div>
        </BorderContentCard>
    </div>
  );
};

export default ForSkoler;
