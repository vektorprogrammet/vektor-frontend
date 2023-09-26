import { useEffect, useState } from "react";

const Skoler = (): JSX.Element => {
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="w-10/12 border-2 mt-100 shadow">
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
            <tr className="even:bg-white odd:bg-table-grey">
              <td className="text-center py-3 px-6">Amalie Skram</td>
              <td className="text-center py-3 px-6">Aaryan</td>
              <td className="text-center py-3 px-6">
                Aaryan.er.kul@hotmail.com
              </td>
              <td className="text-center py-3 px-6">12345678</td>
              <td className="text-center py-3 px-6">Arabisk</td>
            </tr>
            <tr className="even:bg-white odd:bg-table-grey">
              <td className="text-center py-3 px-6">Blussuvoll</td>
              <td className="text-center py-3 px-6">Maurice</td>
              <td className="text-center py-3 px-6">email@domene.com</td>
              <td className="text-center py-3 px-6">12345678</td>
              <td className="text-center py-3 px-6">Norsk</td>
            </tr>
            <tr className="even:bg-white odd:bg-table-grey">
              <td className="text-center py-3 px-6">Charlottenlund</td>
              <td className="text-center py-3 px-6">Ola</td>
              <td className="text-center py-3 px-6">email@email.com</td>
              <td className="text-center py-3 px-6">12345678</td>
              <td className="text-center py-3 px-6">Norsk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skoler;
