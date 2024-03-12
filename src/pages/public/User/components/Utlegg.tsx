import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NyttUtlegg from "./NyttUtlegg";
import { faMinus, faPencil, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Utlegg: React.FC = () => {
  const [showWindow, setWindow] = useState(false); 
  const [showConfirmation, setConfirmation] = useState(false);
  const handleClick = () => {
    setWindow(!showWindow)
    setConfirmation(false);
  }

  const mapToTable = (utlegg: Utlegg[]) => {
    return utlegg.map((u, index) => (
      <tr key={index.valueOf()} className="bg-white">
        <td className="py-3 px-6 sm:px-3">{u.Id}</td>
        <td className="py-3 px-4 sm:px-2">{u.utleggsdato}</td>
        <td className="py-3 px-20 sm:px-10">{u.beskrivelse}</td>
        <td className="py-3 px-10 sm:px-5">{u.sum}</td>
        <td className="py-3 px-6 sm:px-3 text-blue-600 hover:font-semibold">{u.kvittering}</td>
        <td className={
          `py-3 px-6 ${u.status === "Til behandling" ? 'text-amber-300' : 'text-green-500'}`
        }>
          {u.status}
        </td>
        <td className="py-3 px-4 text-blue-600 hover:font-semibold">
          {u.status === "Til behandling" && (
            <>Rediger <FontAwesomeIcon icon={faPencil}/></>
          )}
        </td>
        <td className="py-3 px-4 text-rose-600 hover:font-semibold">
          {u.status === "Til behandling" && (
            <>Slett <FontAwesomeIcon icon={faTrashCan} /></>
          ) }

        </td>

      </tr>
    ));
  };

  interface Utlegg {
    Id: string,
    utleggsdato: string;
    beskrivelse: string;
    sum: string;
    kvittering: string;
    status: string;
    endre: string;
  }

  const MineUtlegg: Utlegg[] = [
    {
      Id: "123456789",
      utleggsdato: "31.01.2024",
      beskrivelse: "Pizza",
      sum: "123,00 kr",
      kvittering: "Vis kvittering",
      status: "Til behandling",
      endre: "slett",
    },
    {
      Id: "123456789",
      utleggsdato: "31.01.2024",
      beskrivelse: "Teamsosial",
      sum: "600,00 kr",
      kvittering: "Vis kvittering",
      status: "Refundert",
      endre: "",
    }
  ]

  const Bekreftelse = () => {

    return(
      <div className="bg-green-700/20 h-10 text-center">
        <h1 className="text-green-700">
          Utlegget ditt har blitt registrert
        </h1>
      </div>
    )
  }
 
    return(
      <div>
        { showConfirmation && <Bekreftelse/>}
        <div className="leading-relaxed font-sans max-w-md mx-auto md:max-w-2xl flex flex-col justify-center items-center ">
            <h1 className="font-sans max-w-2xl mt-16 text-vektor-darblue text-4xl text-center font-bold mx-3">
              Utlegg
            </h1>
            <div className="mt-4 mb-10 text-xl">
              Her kan du registrere utlegg du har gjort for vektorprogrammet som du ønsker å få refundert.
              For å få refusjon må du laste opp en kvittering som bekrefter utlegget ditt.
            </div>

            <h1 className="font-sans max-w-2xl mt-2 text-vektor-darblue text-2xl text-center font-bold mx-3">
              Hva kan jeg få refundert?
            </h1>
            <div className="mt-4 mb-20 text-lg">
              {`Du kan typisk få refusjon for bussbilletter til og fra skole, kaffeposer til stand, kake til
              arrangementer og lignende. Det er ellers lurt å høre med en leder om du kan få utlegget ditt
              refundert før du legger ut. Om du har spørsmål kan du kontakte økonomiteamet på `}
              <a className="hover:underline text-vektor-darblue break-all" href="mailto:okonomi@vektorprogrammet.no">
                okonomi@vektorprogrammet.no
              </a>
            </div>

            <h1 className="font-sans max-w-2xl mb-4 text-vektor-darblue text-2xl text-center font-bold mx-3">
              Mine utlegg
            </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center lg:ml-60 lg:items-start sm:items-center sm:justify-center">
            <button className={`text-xl hover:font-semibold mb-4 ${!showWindow ? 'text-green-600':'text-blue-600'}`} onClick={handleClick}>
              {!showWindow || showConfirmation? <><FontAwesomeIcon icon={faPlus}/> Nytt utlegg</> : <><FontAwesomeIcon icon={faMinus} className="mr-2"/>Skjul skjema</>}
            </button>
          </div>
          {
            !showConfirmation && showWindow &&
            <NyttUtlegg showConfirmation={showConfirmation} setConfirmation={setConfirmation} setNew={handleClick}/>
          }
          <hr className="bg-slate-100 lg:m-auto h-px lg:w-8/12 mx-10"/>
          <div className="flex justify-center mt-10 mb-20">
            <table className="table-fixed text-left divide-y divide-gray-300 text-base block overflow-x-auto border-t-2 border-b-2 dark:text-gray-300 mx-10">
              <thead>
                <tr>
                  <th className="w-1/12 py-3 px-6 sm:px-3 bg-table-grey">Id</th>
                  <th className="w-1/12 py-3 px-4 sm:px-2 bg-table-grey">Utleggsdato</th>
                  <th className="w-3/12 py-3 px-20 sm:px-10 bg-table-grey">Beskrivelse</th>
                  <th className="w-2/12 py-3 px-10 sm:px-5 bg-table-grey">Sum</th>
                  <th className="w-3/12 py-3 px-6 sm:px-3 bg-table-grey">Kvittering</th>
                  <th className="w-3/12 py-3 px-6 bg-table-grey">Status</th>
                  <th className="w-1/12 py-3 px-4 bg-table-grey"></th>
                  <th className="w-1/12 py-3 px-4 bg-table-grey"></th>
                </tr>
              </thead>
              <tbody>
                {mapToTable(MineUtlegg)}
              </tbody>
            </table>
          </div>
          </div>
      </div>  
    )
}


export default Utlegg;