// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Profil() {
  return (
    <div className="mb-10 w-full sm:flex sm:justify-center">
      <div className="mx-auto max-w-sm sm:mx-4 sm:max-w-full">
        <div className="mt-16 max-w-full bg-white p-2 shadow">
          <h1 className="font-medium text-2xl text-vektor-darblue">
            Aaryan Neupane
          </h1>
          <p>Admin</p>
        </div>
        <img
          src="https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644805d1e8ef2.jpeg"
          alt="Aaryan"
          className="mt-2 max-w-full"
        />
        <div className="mt-2 max-w-full bg-white p-2 shadow">
          <p className="m-2">Avdeling: Trondheim</p>
          <p className="m-2">Linje: MTING</p>
          <p className="m-2">Telefon: 123 45 678</p>
          <p className="m-2">Epost: aaryan.er.kul@domene.no</p>
          <p className="m-2">Vektorepost: aaryan.er.kul@domene.no</p>
        </div>
      </div>
      <div className="mx-auto mb-8 max-w-sm sm:mx-4 sm:my-14 sm:w-full sm:max-w-2xl md:mt-14">
        <div className="mt-2 max-w-full bg-white p-2 shadow">
          <h1 className="pt-2 pb-2 font-medium text-2xl text-vektor-darblue">
            Medlem i hovedstyret
          </h1>
          <table className="w-full">
            <thead>
              <tr className="bg-table-grey text-left text-gray-700">
                <th className="p-2">Stilling</th>
                <th className="p-2">Start</th>
                <th className="p-2">Slutt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-gray-200 border-t-2">
                <td className="p-2">IT-ansvarlig</td>
                <td className="p-2">Høst 2023</td>
                <td className="p-2">Fortsatt aktiv</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 max-w-full bg-white p-2 shadow">
          <h1 className="pt-2 pb-2 font-medium text-2xl text-vektor-darblue">
            Assistenthistorikk
          </h1>
          <table className="w-full">
            <thead>
              <tr className="bg-table-grey text-left text-gray-700">
                <th className="p-2">Skole</th>
                <th className="p-2">Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-gray-200 border-t-2">
                <td className="p-2">Åsheim</td>
                <td className="p-2">Vår 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" mt-2 max-w-full bg-white p-2 shadow">
          <h1 className="pt-2 pb-2 font-medium text-2xl text-vektor-darblue">
            Teamhistorikk
          </h1>
          <table className="w-full">
            <thead>
              <tr className="border-gray-200 border-t-2 bg-table-grey text-left text-gray-700">
                <th className="p-2">Team</th>
                <th className="p-2">Stilling</th>
                <th className="p-2">Start</th>
                <th className="p-2">Slutt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-gray-200 border-t-2">
                <td className="p-2">IT</td>
                <td className="p-2">Utvikler</td>
                <td className="p-2">Vår 2022</td>
                <td className="p-2">Vår 2023</td>
              </tr>
              <tr className="border-gray-200 border-t-2">
                <td className="p-2">IT</td>
                <td className="p-2">Leder</td>
                <td className="p-2">Høst 2023</td>
                <td className="p-2">Fortsatt aktiv</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
