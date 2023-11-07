import react from "react";
import { useParams } from "react-router-dom";

const Teammedlemmer = (): JSX.Element => {

  { team } = useParams();

  return (
    <div className="w-full">
      <div className="pt-10 pr-10 pl-10 mt-50 shadow grid-rows-2 grid-cols-2 flex flex-col items-center">
        <h1 className="text-2xl row-start-1 row-end-1">Skoler i Trondheim</h1>
        <div className="flex">
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              aktiveSkoler ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setAktiveSkoler(true)}
            type="button"
          >
            Aktive medlemmer
          </button>
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              !aktiveSkoler ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setAktiveSkoler(false)}
            type="button"
          >
            Inaktive medlemmer
          </button>
        </div>
      </div>
      <div className="p-10 flex justify-center items-center ml-6">
        <div className="w-10/12 border-2 mt-100 shadow overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  Skole
                </th>
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  Kontakperson
                </th>
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  E-post
                </th>
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  Telefon
                </th>
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  Språk
                </th>
              </tr>
            </thead>
            <tbody>
              {mapToTable(
                aktiveSkoler ? aktiveSkolerListe : inaktiveSkolerListe,
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
              }

export default Teammedlemmer;