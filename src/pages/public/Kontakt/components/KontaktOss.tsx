import React from "react";
import Division from "./Division.js";

export enum City {
  OSLO = "Oslo",
  BERGEN = "Bergen",
  TRONDHEIM = "Trondheim",
  ÅS = "Ås",
}

interface TabProps {
  divisions: DivisionList[];
}

interface DivisionList {
  name: string;
  number: number;
}

const TrondheimTab = ({ open }: { open:boolean }): JSX.Element => {
  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <Division
        name="Trondheim"
        subtitle="Norges teknisk-naturvitenskapelige universitet"
        mail="styret.ntnu@vektorprogrammet.no"
        address="Høgskoleringen 5 7491 Trondheim"
        contactInfos={[{ name: "Styret", mail: "styret.ntnu@vektorprogrammet.no" },
          { name: "Evaluering", mail: "evaluering.ntnu@vektorprogrammet.no" },
          { name: "Rekruttering", mail: "rekruttering.ntnu@vektorprogrammet.no" },
          { name: "Skolekoordinering", mail: "skolekoordinering.ntnu@vektorprogrammet.no" },
          { name: "Sponsor", mail: "sponsor.ntnu@vektorprogrammet.no" },
          { name: "Økonomi", mail: "okonomi@vektorprogrammet.no" },
          { name: "IT", mail: "it@vektorprogrammet.no" },
          { name: "Profilering", mail: "profilering.ntnu@vektorprogrammet.no" }]}
        contact
      />
    </div>
  );
};

const AasTab = ({ open }: { open:boolean }): JSX.Element => {
  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <Division
        name="Ås"
        subtitle="Norges miljø- og biovitenskapelige universitet"
        mail="nmbu@vektorprogrammet.no"
        contactInfos={[{ name: "Styret", mail: "nmbu@vektorprogrammet.no" },
          { name: "Sponsor og økonomi", mail: "sponsor.nmbu@vektorprogrammet.no" },
          { name: "Skolekoordinering", mail: "skolekoordinering.nmbu@vektorprogrammet.no" },
          { name: "Evaluering, Rekruttering og Profilering", mail: "evaluering.nmbu@vektorprogrammet.no" }]}
        contact
      />
    </div>
  );
};

const BergenTab = ({ open }: { open:boolean }): JSX.Element => {
  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <Division
        name="Bergen"
        subtitle="Universitetet i Bergen"
        mail="uib@vektorprogrammet.no"
        contactInfos={[{ name: "Styret", mail: "uib@vektorprogrammet.no" },
          { name: "Skolekoordinering", mail: "skolekoordinering.uib@vektorprogrammet.no" },
          { name: "Rekruttering", mail: "rekruttering.uib@vektorprogrammet.no" }]}
        contact
      />
    </div>
  );
};

const HovedstyretTab = ({ open }: { open:boolean }): JSX.Element => {
  return (
    <div className={`${open ? "block" : "hidden"}`}>
      <Division
        name="Hovedstyret"
        description="Hovedstyret er det nasjonale styret i vektorprogrammet. De er et overordnet organ med ansvar for drifting av hele organisasjonen."
        mail="hovedstyret@vektorprogrammet.no"
        members={8}
        button
        contactInfos={[{ name: "Inga Bordal", title: "Leder", mail: "inga.bordal@vektorprogrammet.no" },
          { name: "Emma Dyvesveen Myrbekk", title: "Nestleder", mail: "emma.dyvesveen@vektorprogrammet.no" },
          { name: "Andreas Hope Pedersen", title: "Ekspansjon", mail: "andreas.pedersen@vektorprogrammet.no" },
          { name: "Erlend Marius Ommundsen", title: "IT-ansvarlig", mail: "erlend.marius@vektorprogrammet.no" },
          { name: "David Ramsvik", title: "Mentor", mail: "david@vektorprogrammet.no" },
          { name: "Ingeborg Eldevik Rusaas", title: "Profilering", mail: "ingeborg.eldevik@vektorprogrammet.no" },
          { name: "Adrian Larsen", title: "Sponsor", mail: "adrian@vektorprogrammet.no" },
          { name: "Odin Nilsen", title: "Økonomi", mail: "odin@vektorprogrammet.no" }]}
        contact={false}
      />
    </div>
  );
};

const Tabs = ({
  divisions,
}:TabProps): JSX.Element => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" role="tablist">
          {divisions.map((data) => {
            const chosenStyle = openTab === data.number ? `text-vektor-darblue bg-white border-t-2 border-r-2 border-l-2` : `text-vektor-darblue `;
            return (
              <div className="-mb-px mr-0 last:mr-0 flex-auto text-center">
                <a
                  className={`text-base font-bold px-1 py-3 block line leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-vektor-blue ${chosenStyle}`}
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
              </div>
            );
          })}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded border-b-2 border-r-2 border-l-2 px-4 py-5 flex-auto tab-content tab-space">
          <TrondheimTab open={openTab === 1} />
          <AasTab open={openTab === 2} />
          <BergenTab open={openTab === 3} />
          <HovedstyretTab open={openTab === 4} />
        </div>
      </div>
    </>
  );
};

export default Tabs;
