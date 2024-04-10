import React, { useState } from "react";
import Navbar from "./Navbar";
import CreateTable from "./CreateTable";

const Brukere = (): JSX.Element => {
  const select = ["Aktive Brukere", "Inaktive Brukere"];
  const [selected, setSelected] = useState<string>(select[0]);

  interface User {
    name: string;
    phone: string;
    email: string;
    study: string;
    region: string;
  }

  const aktiveBrukereListe: User[] = [
    {
      name: "Amalie Skram",
      phone: "12345678",
      email: "Aaryan.er.kul@hotmail.com",
      study: "MTDT",
      region: "Trondheim",
    },
    {
      name: "Filip King",
      phone: "12345678",
      email: "Filip443@gmail.com",
      study: "BIT",
      region: "Trondheim",
    },
    {
      name: "Mauriccio",
      phone: "69443293",
      email: "mauriccio@hotmail.com",
      study: "MTDT",
      region: "Madagaskar",
    },
  ];

  const inaktiveBrukereListe: User[] = [
    {
      name: "OJ Simpy",
      phone: "76543232",
      email: "OJ@hotmail.com",
      study: "MTDT",
      region: "Trondheim",
    },
    {
      name: "Alfie Queen",
      phone: "12345678",
      email: "Alfie@gmail.com",
      study: "MTDT",
      region: "Trondheim",
    },
    {
      name: "Mauriccio",
      phone: "69443293",
      email: "mauriccio@hotmail.com",
      study: "MTDT",
      region: "Madagaskar",
    },
  ];

  return (
    <div className="w-full">
      <div className="pt-10 mt-50 shadow grid-rows-2 grid-cols-2 flex flex-col items-center">
        <h1 className="text-2xl row-start-1 row-end-1">Brukere</h1>
        <div className="flex flex-wrap">
          <Navbar select={select} selected={selected} setSelected={setSelected} />
          <input className="mt-auto ml-20 w-30 h-10 input input-info input-sm" type="text" placeholder="Søk..." />
        </div>
        {(selected === select[0] && (
          <CreateTable header={["Navn", "Telefon", "E-post", "Linje", "Avdeling"]} content={aktiveBrukereListe} />
        )) || (selected === select[1] && (
          <CreateTable header={["Navn", "Telefon", "E-post", "Linje", "Avdeling"]} content={inaktiveBrukereListe} />
        ))}
      </div>
    </div>
  );
};

export default Brukere;
