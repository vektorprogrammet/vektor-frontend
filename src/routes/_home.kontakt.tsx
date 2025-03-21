import { Label } from "@radix-ui/react-label";
import { Mail, MapPin, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getKontakt, info } from "~/api/kontakt";
import { Tabs } from "~/components/tabs";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import type { DepartmentPretty } from "~/lib/types";
import { departments } from "~/lib/types";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Kontakt() {
  const kontaktInfo = getKontakt();
  return (
    <div className="mx-auto mt-10 mb-20 flex max-w-6xl flex-col items-center">
      <header className="mx-auto flex w-full flex-wrap justify-around">
        <div className="mt-5 flex max-w-6xl flex-col">
          <h2 className=" mx-3 font-bold text-4xl text-gray-600 dark:text-gray-200">
            {kontaktInfo.card.title}
          </h2>
          <p className="mx-3 mt-4 mb-20 max-w-md text-xl dark:text-gray-300">
            {kontaktInfo.card.text}
          </p>
        </div>
        <img
          src={kontaktInfo.card.image.url.href}
          alt={kontaktInfo.card.image.alt}
          className="mx-auto mt-5 mr-auto ml-auto w-full max-w-xs rounded-lg sm:mt-8 sm:max-w-sm md:mt-10 md:max-w-md lg:mt-12 lg:max-w-lg xl:mt-16 xl:max-w-xl dark:invert dark:saturate-0"
        />
      </header>
      <h1 className="mx-auto mt-10 mb-10 max-w-lg text-center font-bold text-5xl text-gray-600 dark:text-gray-200">
        {kontaktInfo.title}
      </h1>
      <ContactTabCards />
    </div>
  );
}

function ContactTabCards() {
  const initialTabState = () => {
    const storedTab = sessionStorage.getItem("kontaktTab");
    return storedTab ? Number.parseInt(storedTab, 10) : 1;
  };
  const [openTab, setOpenTab] = useState(initialTabState);
  useEffect(() => {
    sessionStorage.setItem("kontaktTab", openTab.toString());
  }, [openTab]);

  const names = Object.values(departments) as Array<DepartmentPretty>;

  const keys = names.map((name, i) => {
    return { name: name, number: i };
  });

  const active = keys.find((key) => key.number === openTab);

  if (!active) {
    console.error("ERROR: INVALID ACTIVE KEY");
    return null;
  }

  return (
    <div className="mb-6 flex flex-col items-start md:mb-auto md:max-w-6xl md:flex-row">
      <div className="ml-3 w-1/5">
        <Tabs divisions={keys} tabstate={openTab} setOpenTab={setOpenTab} />
      </div>
      <main className="mx-auto mb-6 flex h-[500px] w-full flex-col items-start overflow-y-scroll break-words rounded-md px-5 py-5 sm:w-[440px] md:w-[720px] lg:ml-16 lg:w-[820px] xl:ml-20 xl:w-[1100px]">
        <div className="flex-grow">
          {<DepartmentCard department={active.name} />}
        </div>
      </main>
    </div>
  );
}

function DepartmentCard({ department }: { department: DepartmentPretty }) {
  const result = info(department);

  if (result instanceof Error) return <span>{result.message}</span>;

  const {
    name,
    description,
    email,
    address,
    members,
    button,
    contacts,
    openForContact,
  } = result;

  return (
    <>
      <div className="grid grid-cols-1 gap-10 sm:p-6 md:grid-cols-2">
        <div>
          <h3 className="font-bold text-2xl text-blue-800 dark:text-neutral-200">
            {name}
          </h3>
          <div className="text-base">{description}</div>
          <div className="mt-3 flex gap-1 md:mt-8">
            <Mail className="h-5 w-5 text-black" />
            <a
              className="block truncate text-sm hover:underline"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
          {address && (
            <div className="flex gap-1 text-sm">
              <MapPin className="h-5 w-5 text-black" />
              <span>{address}</span>
            </div>
          )}
          {members && (
            <div className="flex gap-1 whitespace-nowrap text-sm">
              <Users className="h-5 w-5 text-black" />
              <span>{`${members} medlemmer`}</span>
            </div>
          )}
          {button && (
            <div className="py-5">
              <Button className="bg-vektor-darkblue hover:bg-vektor-blue">
                Les mer om hovedstyret
              </Button>
            </div>
          )}
        </div>
        <div className="divide-y divide-solid">
          {contacts.map((contact) => {
            return (
              <div className="mt-5 py-2" key={contact.name}>
                <div className="text-blue-800 dark:text-gray-200">
                  {contact.name}
                </div>
                {contact.title && <span>{contact.title}</span>}
                <a
                  className="block truncate text-sm hover:underline"
                  href={`mailto:${contact.mail}`}
                >
                  {contact.mail}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {openForContact && (
        <div className="max-w-[600px] dark:bg-neutral-800">
          <div className="pt-10 text-center font-bold text-2xl text-blue-800 dark:text-gray-200">
            {`Kontakt styret i ${name}`}
          </div>
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
}
