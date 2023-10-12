import React from "react";
import { useNavigate } from "react-router-dom";
import Division from "./Division";

interface TabProps {
  divisions: DivisionList[];
}

interface DivisionList {
  name: string;
  number: number;
}

const TrondheimTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center ${open ? "block" : "hidden"}`}>
      <Division title="STYRET" text="Ansvarlig for driften av Vektorprogrammet i Trondheim." mail="styret.ntnu@vektorprogrammet.no" numberOfMembers={9} button_name="Les mer" url="trondheim/styret" />
      <Division title="EVALUERING" text="Vi sender ut spørreundersøkelser, lager statistikk av dem og skriver så semester- og årsrapporter." mail="evaluering.ntnu@vektorprogrammet.no" numberOfMembers={5} button_name="Les mer" url="trondheim/evaluering" />
      <Division title="REKRUTTERING" text="I rekruttering jobber vi med å skaffe nye vektorassistenter." mail="rekruttering.ntnu@vektorprogrammet.no" numberOfMembers={11} button_name="Les mer" url="trondheim/rekruttering" />
      <Division title="SKOLEKOORDINERING" text="Skolekoordinering fungerer som et bindeledd mellom skolene og vektorassistentene gjennom semesteret." mail="skolekoordinering.ntnu@vektorprogrammet.no" numberOfMembers={8} button_name="Les mer" url="trondheim/skolekoordinering" />
      <Division title="SPONSOR" text="Vektorprogrammets bindeledd til næringslivet, samarbeidspartnere og sponsorer." mail="sponsor.ntnu@vektorprogrammet.no" numberOfMembers={6} button_name="Les mer" url="trondheim/sponsor" />
      <Division title="ØKONOMI" text="Økonomiteamet har ansvaret for Vektorprogrammets økonomi." mail="okonomi@vektorprogrammet.no" numberOfMembers={9} button_name="Les mer" url="trondheim/okonomi" />
      <Division title="IT" text="IT-teamet utvikler og drifter Vektorprogrammets nettside og interne datasystemer." mail="it@vektorprogrammet.no" numberOfMembers={10} button_name="Les mer" url="trondheim/IT" />
      <Division title="PROFILERING" text="Profileringsteamet jobber for å gjøre Vektorprogrammet mer synlig gjennom sosiale medier." mail="profilering.ntnu@vektorprogrammet.no" numberOfMembers={7} button_name="Les mer" url="trondheim/profilering" />
    </div>
  );
};

const AasTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center ${open ? "block" : "hidden"}`}>
      <Division title="STYRET" text="Ansvarlig for driften av Vektorprogrammet i Ås." mail="nmbu@vektorprogrammet.no" numberOfMembers={5} button_name="Les mer" url="aas/styret" />
      <Division title="SPONSOR" text="Har ansvaret for økonomien og sponsorene til Vektorprogrammet Ås." mail="sponsor.nmbu@vektorprogrammet.no" numberOfMembers={4} button_name="Les mer" url="aas/sponsor-okonomi" />
      <Division title="SKOLEKOORDINERING" text="Skolekoordinering har ansvaret for kontakten med skolene og organisering av assistentene." mail="skolekoordinering.nmbu@vektorprogrammet.no" numberOfMembers={5} button_name="Les mer" url="aas/skolekoordinering" />
      <Division title="EVALUERING" text="Vi rekrutterer nye assistenter, styrer sosiale medier, arrangerer sosiale aktiviteter og følger opp at alle trives i vervet." mail="evaluering.nmbu@vektorprogrammet.no" numberOfMembers={8} button_name="Les mer" url="aas/evaluering-rekruttering-profilering" />
      <Division title="SOSIALT" text="Vi arrangerer sosiale arrangementer for assistenter og sørger for at alle trives i vervet." mail="sosialt.nmbu@vektorprogrammet.no" numberOfMembers={6} button_name="Les mer" url="aas/sosialt" />
    </div>
  );
};

const BergenTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center ${open ? "block" : "hidden"}`}>
      <Division title="STYRET" text="Ansvarlig for driften av Vektorprogrammet i Bergen." mail="uib@vektorprogrammet.no" numberOfMembers={2} button_name="Les mer" url="bergen/styret" />
      <Division title="SKOLEKOORDINERING" text="Skolekoordinering fungerer som et bindeledd mellom skolene og vektorassistentene gjennom semesteret." mail="skolekoordinering.uib@vektorprogrammet.no" numberOfMembers={2} button_name="Les mer" url="bergen/skolekoordinering" />
      <Division title="REKRUTTERING" text="I rekruttering jobber vi med å skaffe nye vektorassistenter!" mail="rekruttering.uib@vektorprogrammet.no" numberOfMembers={2} button_name="Les mer" url="bergen/rekruttering" />
    </div>
  );
};

const HovedstyretTab = ({ open }: { open: boolean }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-row flex-col md:flex-row ${open ? "block" : "hidden"}`}>
      <div className="flex-1 md:w-1/2 object-contain">
        <h1 className="text-gray-600 text-4xl font-bold ml-4 md:ml-10 dark:text-gray-200">Hovedstyret</h1>
        <div className="mt-4 mb-4 md:mb-20 text-xl ml-4 md:ml-10 dark:text-gray-300">Hovedstyret er det nasjonale styret i vektorprogrammet. De er et overordnet organ med ansvar for drifting av hele organisasjonen.</div>
        <div className="flex space-x-1 space-y-0 items-end ml-4 md:ml-10">
          <svg className="h-4 w-4 text-black dark:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <a className="text-sm truncate overflow-hidden hover:underline dark:text-white" href="mailto:hovedstyret@vektorprogrammet.no">hovedstyret@vektorprogrammet.no</a>
        </div>
        <div className="flex flex-row space-x-1 items-center ml-4 md:ml-10">
          <svg className="h-4 w-4 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <div className="top-0 dark:text-white">{`${8} medlemmer`}</div>
        </div>
        <br />
        <button type="button" onClick={() => navigate(`/team/hovedstyret`)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4 md:ml-10 dark:bg-vektor-darblue dark:text-white dark:hover:bg-blue-600 transition duration-300">
          Les mer om hovedstyret
        </button>
      </div>

      <img
        src="https://vektorprogrammet.no/images/HS_22.jpg?v=1664622616"
        alt="Team1"
        className="max-h-80 object-contain mt-4 md:mt-0"
      />
    </div>
  );
};

const Tabs = ({
  divisions,
}: TabProps): JSX.Element => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full">
        <ul className="flex flex-wrap text-sm font-medium text-center border-gray dark:text-gray-400" role="tablist">
          {divisions.map((data) => {
            return (
              <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
                <a
                  className={`tab-boxed tab-lg text-base font-bold px-1 py-3 block line leading-normal 
                    rounded-t-lg
                    pb-12
                    dark:hover:text-gray-800 transition duration-300 dark:hover:bg-gray-500
                    ${openTab === data.number ? `text-vektor-darblue bg-white  tab-active dark:bg-gray-500 dark:text-gray-800 border-gray border-t-2 border-l-2 border-r-2` : `text-vektor-darblue  border-b-2 hover:bg-gray-200 dark:text-vektor-blue`}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(data.number);
                  }}
                  data-toggle="tab"
                  href={`#link${data.number}`}
                  role="tablist"
                >
                  {data.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-b-2 border-r-2 border-l-2 px-4 py-5 flex-auto tab-content tab-space dark:bg-gray-500">
          <TrondheimTab open={openTab === 1} />
          <AasTab open={openTab === 2} />
          <BergenTab open={openTab === 3} />
          <HovedstyretTab open={openTab === 4} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
