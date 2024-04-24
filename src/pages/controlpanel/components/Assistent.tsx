import React, { useState } from "react";
import Navbar from "./Navbar";
import CreateTable from "./CreateTable";
import { Assistenter, Vikarer } from "./Interfaces";

const Assistent = (): JSX.Element => {
  const select = ["Assistenter", "Vikarer"];
  const [selected, setSelected] = useState<string>(select[0]);

  const assistenter: Assistenter[] = [
    {
      name: "Ole Normann",
      school: "BI",
      email: "ole.normann@gmail.com",
      semester: "Høst 2021",
      department: "IT",
      bolk: "Bolk 1, Bolk 2",
      dag: "Mandag",
    },
    {
      name: "Aaryan Potet",
      school: "IB",
      email: "Aaryan.Potet@gmail.com",
      semester: "Høst 2021",
      department: "IT",
      bolk: "Bolk 1, Bolk 2",
      dag: "Mandag",
    },
  ];

  const vikarer: Vikarer[] = [
    {
      name: "Erling Eriksen",
      tlf: "12345678",
      email: "erling.eriksen@gmail.com",
      linje: "Dataingeniør",
      år: "3",
      språk: "Norsk",
      m: "Ja",
      ti: "Ja",
      o: "Ja",
      to: "Ja",
      f: "Ja",
      bolk: "Bolk 1, Bolk 2",
      poeng: "Høst 2021",
      passende: "IT",
    },
  ];

  return (
    <div className="h-[4000px] pt-10 mt-50 grid-rows-2 grid-cols-2 flex flex-col items-center">
      <h1 className="text-2xl row-start-1 row-end-1">Assistenter</h1>
      <div className="flex flex-wrap">
        <Navbar select={select} selected={selected} setSelected={setSelected} />
      </div>
      {(selected === select[0] && (
        <CreateTable header={["Navn", "Skole", "E-post", "Semester", "Avdeling", "Bolk", "Dag"]} content={assistenter} />
      )) || (selected === select[1] && (
        <CreateTable header={["Navn", "Tlf", "E-post", "Linje", "År", "Språk", "M", "T", "O", "T", "F", "Bolk", "Poeng", "Passende"]} content={vikarer} />
      ))}
    </div>
  );
};

export default Assistent;
