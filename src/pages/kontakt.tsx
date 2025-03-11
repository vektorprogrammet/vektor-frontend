import { useEffect, useState } from "react";
import { Tabs } from "~/components/Tabs";

const kontaktInfo = {
  title: "Kontakt oss",
  card: {
    title: "Organisasjonen",
    text: "Vektorprogrammet er en stor organisasjon med assistenter i 4 norske byer. Under kan du kontakte vektorprogrammet i nærmeste by eller hovedstyret for generelle henvendelser.",
    image: {
      url: new URL(
        "https://vektorprogrammet.no/images/organizationstructure.png",
      ),
      alt: "Organisasjonsstruktur",
    },
  },
};
// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Kontakt() {
  return (
    <div className="max-w-6xl mt-10 mb-20 mx-auto flex flex-col items-center">
      <Card
        key={kontaktInfo.card.title}
        title={kontaktInfo.card.title}
        text={kontaktInfo.card.text}
        alt={kontaktInfo.card.image.alt}
        imgPath={kontaktInfo.card.image.url}
      />
      <h1 className="max-w-lg text-gray-600 text-5xl text-center font-bold mx-auto mt-10 mb-10 dark:text-gray-200">
        {kontaktInfo.title}
      </h1>
      <KontaktTabs
        divisions={[
          { name: "Trondheim", number: 1 },
          { name: "Ås", number: 2 },
          { name: "Bergen", number: 3 },
          { name: "Hovedstyret", number: 4 },
        ]}
      />
    </div>
  );
}

/* Card */

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

const Card = ({ title, text, imgPath, alt }: Props) => {
  return (
    <div className="flex w-full mx-auto justify-around flex-wrap">
      <div className="max-w-6xl mt-5 flex flex-col">
        <h1 className=" text-gray-600 text-4xl font-bold mx-3 dark:text-gray-200">
          {title}
        </h1>
        <p className="max-w-md mt-4 mb-20 text-xl mx-3 dark:text-gray-300">
          {text}
        </p>
      </div>
      <img
        src={imgPath.href}
        alt={alt}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 mx-auto mr-auto ml-auto dark:invert dark:saturate-0"
      />
    </div>
  );
};

/* Tabs */

interface KontaktTabProps {
  divisions: Array<DivisionList>;
}

interface DivisionList {
  name: string;
  number: number;
}

const TrondheimTab = ({ open }: { open: boolean }) => {
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

const AasTab = ({ open }: { open: boolean }) => {
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

const BergenTab = ({ open }: { open: boolean }) => {
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

const HovedstyretTab = ({ open }: { open: boolean }) => {
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

const KontaktTabs = ({ divisions }: KontaktTabProps) => {
  const initialTabState = () => {
    const storedTab = sessionStorage.getItem("kontaktTab");
    return storedTab ? Number.parseInt(storedTab, 10) : 1;
  };
  const [openTab, setOpenTab] = useState(initialTabState);
  useEffect(() => {
    sessionStorage.setItem("kontaktTab", openTab.toString());
  }, [openTab]);
  return (
    <div className="flex flex-col md:flex-row items-start md:max-w-6xl md:mb-auto mb-6">
      <div className="w-1/5 ml-3">
        <Tabs
          divisions={divisions}
          tabstate={openTab}
          setOpenTab={setOpenTab}
        />
      </div>
      <div className="flex flex-col w-full items-start overflow-y-scroll h-[500px] break-words mb-6 rounded-md px-5 py-5 mx-auto xl:ml-20 lg:ml-16 sm:w-[440px] md:w-[720px] lg:w-[820px] xl:w-[1100px]">
        <TrondheimTab open={openTab === 1} />
        <AasTab open={openTab === 2} />
        <BergenTab open={openTab === 3} />
        <HovedstyretTab open={openTab === 4} />
      </div>
    </div>
  );
};

/* Division */

interface DivisionProps {
  name: string;
  subtitle?: string;
  description?: string;
  mail: string;
  address?: string;
  members?: number;
  button?: boolean;
  contactInfos: Array<ContactInfo>;
  contact: boolean;
}
interface ContactInfo {
  name: string;
  title?: string;
  mail: string;
}

const Division = ({
  name,
  subtitle,
  description,
  mail,
  members,
  button,
  address,
  contactInfos,
  contact,
}: DivisionProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 sm:p-6 pd:2">
        <div>
          <div className="font-bold text-2xl text-blue-800 dark:text-neutral-200">
            {name}
          </div>
          {subtitle && (
            <div className="text-base dark:text-neutral-200">{subtitle}</div>
          )}
          {description && <div className="text-base">{description}</div>}
          <div className="flex space-x-1 mt-3 md:mt-8">
            <svg
              className="h-4 w-4 text-balck"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <a
              className="truncate block text-sm hover:underline"
              href={`mailto:${mail}`}
            >
              {mail}
            </a>
          </div>
          {address && (
            <div className="flex space-x-1 text-sm">
              <svg
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>{address}</div>
            </div>
          )}
          {members && (
            <div className="whitespace-nowrap flex space-x-1 text-sm">
              <svg
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>{`${members} medlemmer`}</div>
            </div>
          )}
          {button && (
            <div className="py-5 left-0">
              <button
                type="submit"
                className="bg-vektor-darkblue hover:bg-vektor-blue text-white font focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Les mer om hovedstyret
              </button>
            </div>
          )}
        </div>
        <div className="divide-y divide-solid">
          {contactInfos.map((data, id) => {
            return (
              <div className="py-2 mt-5" key={data.name}>
                <div className="text-blue-800 dark:text-gray-200">
                  {contactInfos[id].name}
                </div>
                {contactInfos[id].title && <div>{contactInfos[id].title}</div>}
                <a
                  className="text-sm hover:underline truncate block"
                  href={`mailto:${contactInfos[id].mail}`}
                >
                  {contactInfos[id].mail}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {contact && (
        <div className="dark:bg-neutral-800 max-w-[600px]">
          <div className="font-bold text-2xl text-blue-800 text-center pt-10 dark:text-gray-200">{`Kontakt styret i ${name}`}</div>
          <form>
            <div className="mb-6 mt-7 grid xl:grid-cols-2 xl:gap-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ditt navn
                <input
                  type="name"
                  id="name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </label>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Din e-post
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="topic"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Emne
                <input
                  type="topic"
                  id="topic"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Melding
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-vektor-darkblue hover:bg-vektor-blue text-white font focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send melding
            </button>
          </form>
        </div>
      )}
    </>
  );
};
