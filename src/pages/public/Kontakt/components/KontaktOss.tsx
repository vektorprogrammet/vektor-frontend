import React from "react";
import Division from "./Division";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" role="tablist">
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block line leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 1 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1" />
                {" "}
                Trondheim
              </a>
            </li>
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 2 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1" />
                {" "}
                Ås
              </a>
            </li>
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 3 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1" />
                Bergen
              </a>
            </li>
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 4 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1" />
                {" "}
                Hovedstyret
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded border-b-2 border-r-2 border-l-2">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
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
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
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
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    <Division
                      name="Bergen"
                      subtitle="Universitetet i Bergen"
                      mail="uib@vektorprogrammet.no"
                      contactInfos={[{ name: "Styret", mail: "uib@vektorprogrammet.no" },
                        { name: "Skolekoordinering", mail: "skolekoordinering.uib@vektorprogrammet.no" },
                        { name: "Rekruttering", mail: "rekruttering.uib@vektorprogrammet.no" }]}
                      contact
                    />
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
