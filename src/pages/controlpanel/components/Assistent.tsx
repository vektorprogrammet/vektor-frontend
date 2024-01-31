import React, { useState } from "react";
import Navbar from "./Navbar";
import { sys } from "typescript";

const Assistent = (): JSX.Element => {
  const select = ["Assistenter", "Vikarer"]
  const [selected, setSelected] = useState<string>(select[0]);

  const mapToTable = (skoler: School[]) => {
    return skoler.map((school, index) => (
      <tr key={index.valueOf()} className="even:bg-white odd:bg-table-grey">
        {Object.values(school).map((value, valueIndex) => (
          <td key={`${index}-${valueIndex}`} className="text-center py-3 px-6">{value}</td>
        ))}
      </tr>
    ));
  };

  interface School {
    name: string;
    school: string;
    email: string;
    semester: string;
    department: string;
    bolk: string;
    dag: string;
  }

  const aktiveSkolerListe: School[] = [
    {
      name: "Ole Normann",
      school: "BI",
      email: "ole.normann@gmail.com",
      semester: "Høst 2021",
      department: "IT",
      bolk: "Bolk 1, Bolk 2",
      dag: "Mandag"
    },
  ];

  // const inaktiveSkolerListe: School[] = [
  //   {
  //     name: "St. Olav VGS",
  //     contactPerson: "Ola Nordmann",
  //     email: "testmail@gmail.com",
  //     phone: "87654321",
  //     language: "Nynorsk",
  //   },
  // ];

  return (
    <div className="w-full">
      <div className="pt-10 pr-10 pl-10 mt-50 shadow grid-rows-2 grid-cols-2 flex flex-col items-center">
        <h1 className="text-2xl row-start-1 row-end-1">Assistenter</h1>
        <div className="flex flex-wrap">
          <Navbar select={select} selected={selected} setSelected={setSelected} />
        </div>
      </div>
      <div className="p-10 flex justify-center items-center ml-6">
        <div className="w-10/12 border-2 mt-100 shadow overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                <th className="text-center w-1/7 py-3 px-6 text-vektor-darblue">
                  Navn
                </th>
                <th className="text-center w-1/7 py-3 px-6 text-vektor-darblue">
                  Skole
                </th>
                <th className="text-center w-1/7 py-3 px-6 text-vektor-darblue">
                  E-post
                </th>
                <th className="text-center w-1/7 py-3 px-6 text-vektor-darblue">
                  Semester
                </th>
                <th className="text-center w-1/7 py-3 px-6 text-vektor-darblue">
                  Avdeling
                </th>
                <th className="text-center w-1/7 py-3 px-6 text-vektor-darblue">
                  Bolk
                </th>
                <th className="text-center w-1/7 py-3 px-6 text-vektor-darblue">
                  Dag
                </th>
              </tr>
            </thead>
            <tbody>
              {mapToTable(
                (selected === select[0]
                  && aktiveSkolerListe)
                  || ([]),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Assistent;