import React, { useEffect } from "react";
import Division from "./Division.js";

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
  const initialTabState = () => {
    const storedTab = sessionStorage.getItem("kontaktTab");
    return storedTab ? parseInt(storedTab, 10) : 1;
  };
  const [openTab, setOpenTab] = React.useState(initialTabState);
  useEffect(() => {
    sessionStorage.setItem("kontaktTab", openTab.toString());
  }, [openTab]);
  return (
    <div className="w-full">
      <div className="flex font-medium text-center border-b" role="tablist">
        {divisions.map((data) => {
          const chosenStyle = openTab === data.number ? `border-t-gray-200 border-l-gray-200 border-r-gray-200 border-b-white text-vektor-darblue z-50` : `text-vektor-darblue z-50`;
          return (
            <div className="flex-auto text-center border-gray-200 border-b-2 -mb-[2px]" key={data.name}>
              <button
                type="button"
                className={`rounded-t-lg -mb-[2px] z-50 text-base w-full font-bold py-3 border-b-gray-200 hover:border-2 hover:border-gray-200 hover:text-vektor-blue border-2 border-b-2 border-white ${chosenStyle}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(data.number);
                }}
                data-toggle="tab"
                role="tablist"
              >
                {data.name}
              </button>
            </div>
          );
        })}
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border-b-2 border-r-2 border-l-2 px-4 py-5">
        <TrondheimTab open={openTab === 1} />
        <AasTab open={openTab === 2} />
        <BergenTab open={openTab === 3} />
        <HovedstyretTab open={openTab === 4} />
      </div>
    </div>
  );
};

export default Tabs;
