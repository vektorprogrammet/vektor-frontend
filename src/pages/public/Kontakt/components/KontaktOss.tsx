import React, { useEffect } from "react";
import Division from "./Division.js";
import { Tabs } from "../../Team/components/TeamTabs.js";

interface KontaktTabProps {
  divisions: DivisionList[];
}

interface DivisionList {
  name: string;
  number: number;
}

const TrondheimTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`flex-grow ${open ? "block" : "hidden"}`}>
      <Division
        name="Trondheim"
        subtitle="Norges teknisk-naturvitenskapelige universitet"
        mail="styret.ntnu@vektorprogrammet.no"
        address="Høgskoleringen 5, 7491 Trondheim"
        contactInfos={[
          { name: "Styret", mail: "styret.ntnu@vektorprogrammet.no" },
          { name: "Evaluering", mail: "evaluering.ntnu@vektorprogrammet.no" },
          {
            name: "Rekruttering",
            mail: "rekruttering.ntnu@vektorprogrammet.no",
          },
          {
            name: "Skolekoordinering",
            mail: "skolekoordinering.ntnu@vektorprogrammet.no",
          },
          { name: "Sponsor", mail: "sponsor.ntnu@vektorprogrammet.no" },
          { name: "Økonomi", mail: "okonomi@vektorprogrammet.no" },
          { name: "IT", mail: "it@vektorprogrammet.no" },
          { name: "Profilering", mail: "profilering.ntnu@vektorprogrammet.no" },
        ]}
        contact
      />
    </div>
  );
};

const AasTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`flex-grow ${open ? "block" : "hidden"}`}>
      <Division
        name="Ås"
        subtitle="Norges miljø- og biovitenskapelige universitet"
        mail="nmbu@vektorprogrammet.no"
        contactInfos={[
          { name: "Styret", mail: "nmbu@vektorprogrammet.no" },
          {
            name: "Sponsor og økonomi",
            mail: "sponsor.nmbu@vektorprogrammet.no",
          },
          {
            name: "Skolekoordinering",
            mail: "skolekoordinering.nmbu@vektorprogrammet.no",
          },
          {
            name: "Evaluering, Rekruttering og Profilering",
            mail: "evaluering.nmbu@vektorprogrammet.no",
          },
        ]}
        contact
      />
    </div>
  );
};

const BergenTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`flex-grow ${open ? "block" : "hidden"}`}>
      <Division
        name="Bergen"
        subtitle="Universitetet i Bergen"
        mail="uib@vektorprogrammet.no"
        contactInfos={[
          { name: "Styret", mail: "uib@vektorprogrammet.no" },
          {
            name: "Skolekoordinering",
            mail: "skolekoordinering.uib@vektorprogrammet.no",
          },
          {
            name: "Rekruttering",
            mail: "rekruttering.uib@vektorprogrammet.no",
          },
        ]}
        contact
      />
    </div>
  );
};

const HovedstyretTab = ({ open }: { open: boolean }): JSX.Element => {
  return (
    <div className={`flex-grow ${open ? "block" : "hidden"}`}>
      <Division
        name="Hovedstyret"
        description="Hovedstyret er det nasjonale styret i vektorprogrammet. De er et overordnet organ med ansvar for drifting av hele organisasjonen."
        mail="hovedstyret@vektorprogrammet.no"
        members={8}
        button
        contactInfos={[
          {
            name: "Inga Bordal",
            title: "Leder",
            mail: "inga.bordal@vektorprogrammet.no",
          },
          {
            name: "Emma Dyvesveen Myrbekk",
            title: "Nestleder",
            mail: "emma.dyvesveen@vektorprogrammet.no",
          },
          {
            name: "Andreas Hope Pedersen",
            title: "Ekspansjon",
            mail: "andreas.pedersen@vektorprogrammet.no",
          },
          {
            name: "Erlend Marius Ommundsen",
            title: "IT-ansvarlig",
            mail: "erlend.marius@vektorprogrammet.no",
          },
          {
            name: "David Ramsvik",
            title: "Mentor",
            mail: "david@vektorprogrammet.no",
          },
          {
            name: "Ingeborg Eldevik Rusaas",
            title: "Profilering",
            mail: "ingeborg.eldevik@vektorprogrammet.no",
          },
          {
            name: "Adrian Larsen",
            title: "Sponsor",
            mail: "adrian@vektorprogrammet.no",
          },
          {
            name: "Odin Nilsen",
            title: "Økonomi",
            mail: "odin@vektorprogrammet.no",
          },
        ]}
        contact={false}
      />
    </div>
  );
};

const KontaktTabs = ({ divisions }: KontaktTabProps): JSX.Element => {
  const initialTabState = () => {
    const storedTab = sessionStorage.getItem("kontaktTab");
    return storedTab ? Number.parseInt(storedTab, 10) : 1;
  };
  const [openTab, setOpenTab] = React.useState(initialTabState);
  useEffect(() => {
    sessionStorage.setItem("kontaktTab", openTab.toString());
  }, [openTab]);
  return (
    <div className="flex flex-col md:flex-row items-start md:max-w-6xl md:mb-auto mb-6 items-start">
      <div className="w-1/5 ml-3">
        <Tabs divisions={divisions} tabstate={openTab} setOpenTab={setOpenTab}/>
      </div>
      <div className="flex flex-col w-full items-start overflow-y-scroll h-[500px] break-words mb-6 rounded-md px-5 py-5 mx-auto xl:ml-20 lg:ml-16 w-[322px] sm:w-[440px] md:w-[720px] lg:w-[820px] xl:w-[1100px]">
        <TrondheimTab open={openTab === 1} />
        <AasTab open={openTab === 2} />
        <BergenTab open={openTab === 3} />
        <HovedstyretTab open={openTab === 4} />
      </div>
    </div>
  );
};

export default KontaktTabs;
