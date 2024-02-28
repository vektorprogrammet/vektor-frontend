import React, { useState } from "react";
import Navbar from "./Navbar";
import CreateTable from "./CreateTable";

const Skoler = (): JSX.Element => {
  const select = ["Aktive Skoler", "Inaktive Skoler"];
  const [selected, setSelected] = useState<string>(select[0]);

  interface School {
    name: string;
    contactPerson: string;
    email: string;
    phone: string;
    language: string;
  }

  const aktiveSkolerListe: School[] = [
    {
      name: "Amalie Skram",
      contactPerson: "Aaryan",
      email: "Aaryan.er.kul@hotmail.com",
      phone: "12345678",
      language: "Arabisk",
    },
    {
      name: "Blussuvoll",
      contactPerson: "Maurice",
      email: "email@domene.com",
      phone: "12345678",
      language: "Norsk",
    },
    {
      name: "Charlottenlund",
      contactPerson: "Ola",
      email: "email@email.com",
      phone: "12345678",
      language: "Norsk",
    },
  ];

  const inaktiveSkolerListe: School[] = [
    {
      name: "St. Olav VGS",
      contactPerson: "Ola Nordmann",
      email: "testmail@gmail.com",
      phone: "87654321",
      language: "Nynorsk",
    },
  ];

  return (
    <div className="w-full">
      <div className="pt-10 mt-50 shadow grid-rows-2 grid-cols-2 flex flex-col items-center">
        <h1 className="text-2xl row-start-1 row-end-1">Skoler i Trondheim</h1>
        <div className="flex flex-wrap">
          <Navbar select={select} selected={selected} setSelected={setSelected} />
        </div>
        {selected === select[0] ? (
          <CreateTable header={["Skole", "Kontakperson", "E-post", "Telefon", "Språk"]} content={aktiveSkolerListe} />
        ) : (
          <CreateTable header={["Skole", "Kontakperson", "E-post", "Telefon", "Språk"]} content={inaktiveSkolerListe} />
        )}
      </div>
    </div>
  );
};

export default Skoler;
