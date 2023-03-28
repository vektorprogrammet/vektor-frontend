import React from "react";
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
    <div className={`flex justify-center flex-wrap ${open ? "block" : "hidden"} gap-10 `}>
      <Division title="STYRET" text="Ansvarlig for driften av Vektorprogrammet i Trondheim." mail="styret.ntnu@vektorprogrammet.no" numberOfMembers={9} button_name="Les mer" />
      <Division title="EVALUERING" text="Vi sender ut spørreundersøkelser, lager statistikk av dem og skriver så semester- og årsrapporter." mail="evaluering.ntnu@vektorprogrammet.no" numberOfMembers={5} button_name="Les mer" />
      <Division title="REKRUTTERING" text="I rekruttering jobber vi med å skaffe nye vektorassistenter." mail="rekruttering.ntnu@vektorprogrammet.no" numberOfMembers={11} button_name="Les mer" />
      <Division title="SKOLEKOORDINERING" text="Skolekoordinering fungerer som et bindeledd mellom skolene og vektorassistentene gjennom semesteret." mail="skolekoordinering.ntnu@vektorprogrammet.no" numberOfMembers={8} button_name="Les mer" />
      <Division title="SPONSOR" text="Vektorprogrammets bindeledd til næringslivet, samarbeidspartnere og sponsorer." mail="sponsor.ntnu@vektorprogrammet.no" numberOfMembers={6} button_name="Les mer" />
      <Division title="ØKONOMI" text="Økonomiteamet har ansvaret for Vektorprogrammets økonomi." mail="okonomi@vektorprogrammet.no" numberOfMembers={9} button_name="Les mer" />
      <Division title="IT" text="IT-teamet utvikler og drifter Vektorprogrammets nettside og interne datasystemer." mail="it@vektorprogrammet.no" numberOfMembers={10} button_name="Les mer" />
      <Division title="PROFILERING" text="Profileringsteamet jobber for å gjøre Vektorprogrammet mer synlig gjennom sosiale medier." mail="profilering.ntnu@vektorprogrammet.no" numberOfMembers={7} button_name="Les mer" />
    </div>
  );
};

const AasTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`flex justify-center flex-wrap ${open ? "block" : "hidden"} gap-10 `}>
      <Division title="STYRET" text="Ansvarlig for driften av Vektorprogrammet i Ås." mail="nmbu@vektorprogrammet.no" numberOfMembers={5} button_name="Les mer" />
      <Division title="SPONSOR" text="Har ansvaret for økonomien og sponsorene til Vektorprogrammet Ås." mail="sponsor.nmbu@vektorprogrammet.no" numberOfMembers={4} button_name="Les mer" />
      <Division title="SKOLEKOORDINERING" text="Skolekoordinering har ansvaret for kontakten med skolene og organisering av assistentene." mail="skolekoordinering.nmbu@vektorprogrammet.no" numberOfMembers={5} button_name="Les mer" />
      <Division title="EVALUERING" text="Vi rekrutterer nye assistenter, styrer sosiale medier, arrangerer sosiale aktiviteter og følger opp at alle trives i vervet." mail="evaluering.nmbu@vektorprogrammet.no" numberOfMembers={8} button_name="Les mer" />
    </div>
  );
};

const BergenTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`flex justify-center flex-wrap ${open ? "block" : "hidden"} gap-10 `}>
      <Division title="STYRET" text="Ansvarlig for driften av Vektorprogrammet i Bergen." mail="uib@vektorprogrammet.no" numberOfMembers={2} button_name="Les mer" />
      <Division title="SKOLEKOORDINERING" text="Skolekoordinering fungerer som et bindeledd mellom skolene og vektorassistentene gjennom semesteret." mail="skolekoordinering.uib@vektorprogrammet.no" numberOfMembers={2} button_name="Les mer" />
      <Division title="REKRUTTERING" text="I rekruttering jobber vi med å skaffe nye vektorassistenter!" mail="rekruttering.uib@vektorprogrammet.no" numberOfMembers={2} button_name="Les mer" />
    </div>
  );
};

const HovedstyretTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`flex flex-row content-center flex-1 ${open ? "block" : "hidden"}`}>
      <div className="flex-1">
        <h1 className=" text-gray-600 text-4xl font-bold ml-10 dark:text-gray-200">Hovedstyret</h1>
        <p className="max-w-md mt-4 mb-20 text-xl ml-10 dark:text-gray-300">Hovedstyret er det nasjonale styret i vektorprogrammet. De er et overordnet organ med ansvar for drifting av hele organisasjonen.</p>
        <div className="flex space-x-1 space-y-0 items-end">
          <svg className="h-4 w-4 text-black ml-10 dark:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <a className="text-sm truncate overflow-hidden hover:underline dark:text-white" href="mailto:hovedstyret@vektorprogrammet.no">hovedstyret@vektorprogrammet.no</a>
        </div>
        <div className="flex flex-row space-x-1 items-center ">
          <svg className="h-4 w-4 text-black ml-10 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <div className="top-0 dark:text-white">{`${8} medlemmer`}</div>
        </div>
        <br />
        <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-10 dark:bg-vektor-darblue dark:text-white dark:hover:bg-blue-600 transition duration-300">
          Les mer om hovedstyret
        </button>
      </div>

      <img
        src="https://vektorprogrammet.no/images/HS_22.jpg?v=1664622616"
        alt="Team1"
        className="max-w-2xl mr-10 max-h-80 mr-25"
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
