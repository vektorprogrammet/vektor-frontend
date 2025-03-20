import { getKontakt } from "~/api/kontakt";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";
import { Tabs } from "~/components/tabs";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Kontakt() {
  const kontaktInfo = getKontakt();
  return (
    <div className="mx-auto mt-10 mb-20 flex max-w-6xl flex-col items-center">
      <Card
        key={kontaktInfo.card.title}
        title={kontaktInfo.card.title}
        text={kontaktInfo.card.text}
        alt={kontaktInfo.card.image.alt}
        imgPath={kontaktInfo.card.image.url}
      />
      <h1 className="mx-auto mt-10 mb-10 max-w-lg text-center font-bold text-5xl text-gray-600 dark:text-gray-200">
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
    <div className="mx-auto flex w-full flex-wrap justify-around">
      <div className="mt-5 flex max-w-6xl flex-col">
        <h1 className=" mx-3 font-bold text-4xl text-gray-600 dark:text-gray-200">
          {title}
        </h1>
        <p className="mx-3 mt-4 mb-20 max-w-md text-xl dark:text-gray-300">
          {text}
        </p>
      </div>
      <img
        src={imgPath.href}
        alt={alt}
        className="mx-auto mt-5 mr-auto ml-auto w-full max-w-xs rounded-lg sm:mt-8 sm:max-w-sm md:mt-10 md:max-w-md lg:mt-12 lg:max-w-lg xl:mt-16 xl:max-w-xl dark:invert dark:saturate-0"
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
    <div className="mb-6 flex flex-col items-start md:mb-auto md:max-w-6xl md:flex-row">
      <div className="ml-3 w-1/5">
        <Tabs
          divisions={divisions}
          tabstate={openTab}
          setOpenTab={setOpenTab}
        />
      </div>
      <div className="mx-auto mb-6 flex h-[500px] w-full flex-col items-start overflow-y-scroll break-words rounded-md px-5 py-5 sm:w-[440px] md:w-[720px] lg:ml-16 lg:w-[820px] xl:ml-20 xl:w-[1100px]">
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
      <div className="pd:2 grid grid-cols-1 gap-10 sm:p-6 md:grid-cols-2">
        <div>
          <div className="font-bold text-2xl text-blue-800 dark:text-neutral-200">
            {name}
          </div>
          {subtitle && (
            <div className="text-base dark:text-neutral-200">{subtitle}</div>
          )}
          {description && <div className="text-base">{description}</div>}
          <div className="mt-3 flex space-x-1 md:mt-8">
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
              className="block truncate text-sm hover:underline"
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
            <div className="flex space-x-1 whitespace-nowrap text-sm">
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
            <div className="left-0 py-5">
              <Button className="bg-vektor-darkblue hover:bg-vektor-blue">
                Les mer om hovedstyret
              </Button>
            </div>
          )}
        </div>
        <div className="divide-y divide-solid">
          {contactInfos.map((data, id) => {
            return (
              <div className="mt-5 py-2" key={data.name}>
                <div className="text-blue-800 dark:text-gray-200">
                  {contactInfos[id].name}
                </div>
                {contactInfos[id].title && <div>{contactInfos[id].title}</div>}
                <a
                  className="block truncate text-sm hover:underline"
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
        <div className="max-w-[600px] dark:bg-neutral-800">
          <div className="pt-10 text-center font-bold text-2xl text-blue-800 dark:text-gray-200">{`Kontakt styret i ${name}`}</div>
          <form>
            <div className="mt-7 mb-6 grid xl:grid-cols-2 xl:gap-6">
              <div>
                <Label htmlFor="name">Ditt navn</Label>
                <Input placeholder="Skriv inn navn" required />
              </div>
              <div>
                <Label htmlFor="email">Din e-post</Label>
                <Input placeholder="Skriv inn epost" required />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <Label htmlFor="topic">Emne</Label>
                <Input placeholder="Skriv inn emnet for meldingen" required />
              </div>
            </div>
            <div className="mb-6">
              <div>
                <Label htmlFor="message">Melding</Label>
                <Textarea
                  placeholder="Skriv inn meldingen din"
                  rows={6}
                  required
                  id="message"
                />
              </div>
            </div>
            <Button className="bg-vektor-darkblue hover:bg-vektor-blue">
              Send melding
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
