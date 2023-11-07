import React, { useState } from "react";
import Navbar from "./Navbar";

const Teaminteresse = (): JSX.Element => {
  const select = ["IT", "Evaluering", "Rekruttering", "Profilering", "Skolekoordinering", "Sponsor", "Økonomi"];
  const [selected, setSelected] = useState<string>(select[0]);

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
        <div className="flex flex-wrap ml-16">
          <Navbar select={select} selected={selected} setSelected={setSelected} />
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
                (selected === select[0]
                  && itListe)
                  || (selected === select[1]
                  && evalueringListe)
                  || ([]),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teaminteresse;
