import React, { useState } from "react";

const Teaminteresse = (): JSX.Element => {
  const [side, setSide] = useState<string>("it");

  const mapToTable = (sokere: Soker[]) => {
    return sokere.map((soker, index) => (
      <tr key={index.valueOf()} className="even:bg-white odd:bg-table-grey">
        <td className="text-center py-3 px-6">{soker.name}</td>
        <td className="text-center py-3 px-6">{soker.email}</td>
        <td className="text-center py-3 px-6">{soker.phone}</td>
      </tr>
    ));
  };

  interface Soker {
    name: string;
    email: string;
    phone: string;
  }

  const itListe: Soker[] = [
    {
      name: "Aaryan Potet",
      email: "Aaryan.er.kul@hotmail.com",
      phone: "12345678",
    },
    {
      name: "Filipicus Manus",
      email: "email@domene.com",
      phone: "12345678",
    },
    {
      name: "OJ Spiderman",
      email: "email@email.com",
      phone: "12345678",
    },
  ];

  const evalueringListe: Soker[] = [
    {
      name: "Kaalhode",
      email: "kaalhode@hotmail.com",
      phone: "12345678",
    },
    {
      name: "Tinitus",
      email: "tinitus@domene.com",
      phone: "12345678",
    },
    {
      name: "Malala",
      email: "malala@email.com",
      phone: "12345678",
    },
  ];

  return (
    <div className="w-full">
      <div className="pt-10 pr-10 pl-10 mt-50 shadow grid-rows-2 grid-cols-2 flex flex-col items-center">
        <h1 className="text-2xl row-start-1 row-end-1">Teaminteresse</h1>
        <div className="flex">
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              side === "it" ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setSide("it")}
            type="button"
          >
            IT
          </button>
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              side === "evaluering" ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setSide("evaluering")}
            type="button"
          >
            Evaluering
          </button>
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              side === "rekruttering" ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setSide("rekruttering")}
            type="button"
          >
            Rekruttering
          </button>
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              side === "profilering" ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setSide("profilering")}
            type="button"
          >
            Profilering
          </button>
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              side === "skolekoordinering" ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setSide("skolekoordinering")}
            type="button"
          >
            Skolekoordinering
          </button>
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              side === "sponsor" ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setSide("sponsor")}
            type="button"
          >
            Sponsor
          </button>
          <button
            className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${
              side === "okonomi" ? "border-vektor-blue-hover border-b-4 pb-1" : ""
            }`}
            onClick={() => setSide("okonomi")}
            type="button"
          >
            Økonomi
          </button>
        </div>
      </div>
      <div className="p-10 flex justify-center items-center ml-6">
        <div className="w-10/12 border-2 mt-100 shadow overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  Søker
                </th>
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  E-post
                </th>
                <th className="text-center w-1/5 py-3 px-6 text-vektor-darblue">
                  Telefon
                </th>
              </tr>
            </thead>
            <tbody>
              {mapToTable(
                side === "it" ? itListe : evalueringListe,
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teaminteresse;
