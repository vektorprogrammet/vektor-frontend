const Profil = (): JSX.Element => {
  return (
    <div className="sm:flex sm:justify-center mb-10 w-full">
      <div className="max-w-sm sm:max-w-full sm:mx-4 mx-auto">
        <div className="mt-16 bg-white shadow max-w-full p-2">
          <h1 className="text-2xl font-medium text-vektor-darblue">
            Aaryan Neupane
          </h1>
          <p>Admin</p>
        </div>
        <img
          src="https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644805d1e8ef2.jpeg"
          alt="Aaryan"
          className="max-w-full mt-2"
        />
        <div className=" mt-2 bg-white shadow max-w-full p-2">
          <p className="m-2">Avdeling: Trondheim</p>
          <p className="m-2">Linje: MTING</p>
          <p className="m-2">Telefon: 123 45 678</p>
          <p className="m-2">Epost: aaryan.er.kul@domene.no</p>
          <p className="m-2">Vektorepost: aaryan.er.kul@domene.no</p>
        </div>
      </div>
      <div className=" sm:w-full sm:max-w-2xl max-w-sm sm:my-14 sm:mx-4 mx-auto mb-8 md:mt-14">
        <div className=" mt-2 bg-white shadow max-w-full p-2">
          <h1 className="text-2xl font-medium text-vektor-darblue pb-2 pt-2">
            Medlem i hovedstyret
          </h1>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-700 bg-table-grey">
                <th className="p-2">Stilling</th>
                <th className="p-2">Start</th>
                <th className="p-2">Slutt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-gray-200">
                <td className="p-2">IT-ansvarlig</td>
                <td className="p-2">Høst 2023</td>
                <td className="p-2">Fortsatt aktiv</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" mt-2 bg-white shadow max-w-full p-2">
          <h1 className="text-2xl font-medium text-vektor-darblue pt-2 pb-2">
            Assistenthistorikk
          </h1>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-700 bg-table-grey">
                <th className="p-2">Skole</th>
                <th className="p-2">Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-gray-200">
                <td className="p-2">Åsheim</td>
                <td className="p-2">Vår 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" mt-2 bg-white shadow max-w-full p-2">
          <h1 className="text-2xl font-medium text-vektor-darblue pb-2 pt-2">
            Teamhistorikk
          </h1>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-700 bg-table-grey border-t-2 border-gray-200">
                <th className="p-2">Team</th>
                <th className="p-2">Stilling</th>
                <th className="p-2">Start</th>
                <th className="p-2">Slutt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-gray-200">
                <td className="p-2">IT</td>
                <td className="p-2">Utvikler</td>
                <td className="p-2">Vår 2022</td>
                <td className="p-2">Vår 2023</td>
              </tr>
              <tr className="border-t-2 border-gray-200">
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
};

export default Profil;
