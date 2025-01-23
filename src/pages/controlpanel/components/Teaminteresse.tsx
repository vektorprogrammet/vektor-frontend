import { useState, type JSX } from "react";

import CreateTable from "./CreateTable";
import Navbar from "./Navbar";

const Teaminteresse = (): JSX.Element => {
  const select = [
    "IT",
    "Evaluering",
    "Rekruttering",
    "Profilering",
    "Skolekoordinering",
    "Sponsor",
    "Økonomi",
  ];
  const [selected, setSelected] = useState<string>(select[0]);

  interface Soker {
    name: string;
    email: string;
    phone: string;
  }

  const example1: Soker[] = [
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

  const example2: Soker[] = [
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
      <div className="pt-10 mt-50 grid-rows-2 grid-cols-2 flex flex-col items-center">
        <h1 className="text-2xl row-start-1 row-end-1">Teaminteresse</h1>
        <div className="flex flex-wrap">
          <Navbar
            select={select}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        {(selected === select[0] && (
          <CreateTable
            header={["Søkere", "Epost", "Telefon"]}
            content={example1}
          />
        )) ||
          (selected === select[1] && (
            <CreateTable
              header={["Søkere", "Epost", "Telefon"]}
              content={example2}
            />
          )) ||
          (selected === select[2] && (
            <CreateTable
              header={["Søkere", "Epost", "Telefon"]}
              content={example1}
            />
          )) ||
          (selected === select[3] && (
            <CreateTable
              header={["Søkere", "Epost", "Telefon"]}
              content={example2}
            />
          )) ||
          (selected === select[4] && (
            <CreateTable
              header={["Søkere", "Epost", "Telefon"]}
              content={example1}
            />
          )) ||
          (selected === select[5] && (
            <CreateTable
              header={["Søkere", "Epost", "Telefon"]}
              content={example2}
            />
          )) || (
            <CreateTable
              header={["Søkere", "Epost", "Telefon"]}
              content={example1}
            />
          )}
      </div>
    </div>
  );
};

export default Teaminteresse;
