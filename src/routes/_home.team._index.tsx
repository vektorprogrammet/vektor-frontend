import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Users } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, type To } from "react-router";
import { getTeamFaqs } from "~/api/faq";
import {
  getTeam,
  teamsAas,
  teamsBergen,
  teamsHovedstyret,
  teamsTrondheim,
} from "~/api/team";
import { Divider } from "~/components/divider";
import { TabMenu } from "~/components/tab-menu";
import { Button } from "~/components/ui/button";
import {
  type CityPretty,
  type DepartmentPretty,
  departments,
} from "~/lib/types";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Team() {
  const teamInfo = getTeam();
  const teamFaqs = getTeamFaqs();
  return (
    <div className="mx-auto mt-20 mb-20 flex w-full max-w-6xl flex-col items-center">
      <header className="mx-auto flex w-full flex-wrap justify-around">
        <div className="mt-5 flex max-w-6xl flex-col">
          <h2 className="mx-3 font-bold text-4xl text-gray-600 dark:text-gray-200">
            {teamInfo.card.title}
          </h2>
          <div className="mx-3 mt-4 mb-20 max-w-md text-xl dark:text-gray-300">
            <span className="mb-4">{teamInfo.card.text1}</span>
            {teamInfo.card.text2}
            <div className="mt-6">
              <strong>{teamInfo.card.text3}</strong>
            </div>
          </div>
        </div>
        <div className="relative mt-10">
          <div className="absolute top-20 w-full overflow-visible">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: Decorative icon */}
            <svg className="overflow-visible">
              <polyline
                fill="none"
                strokeWidth="2"
                stroke="#2b69b0"
                points="-60,51 30,51 90,101"
              />
            </svg>
          </div>
          <img
            src={teamInfo.card.image.url.href}
            alt={teamInfo.card.image.alt}
            className="mx-auto mr-25 max-h-80 w-auto max-w-full object-contain"
          />
        </div>
      </header>
      <h1 className="mx-auto mt-10 mb-10 max-w-lg text-center font-bold text-5xl text-gray-600 dark:text-gray-200">
        {teamInfo.title}
      </h1>
      <TeamTabs />
      <Divider />

      {/* FAQ Section */}
      <div className="flex w-4/5 max-w-4xl flex-col items-center gap-10 self-center md:mt-20 dark:text-text-dark">
        <h2 className="w-full text-center font-bold text-2xl text-vektor-DARKblue md:text-4xl dark:text-text-dark">
          {"Ofte stilte spørsmål"}
        </h2>
        <div className="flex w-full flex-col items-center">
          <Accordion type="single" collapsible className="w-full">
            {teamFaqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger>
                  <p className="text-left">{question}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-left">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function HovedstyretTab() {
  const team = teamsHovedstyret();
  return (
    <div className="flex flex-col md:ml-24 md:max-w-2xl md:flex-row lg:ml-16 xl:ml-auto">
      <div className="flex-1 object-contain">
        <h2 className="font-bold text-2xl text-gray-600 sm:text-4xl dark:text-gray-200">
          {team.title}
        </h2>
        <p className="mt-4 mb-4 text-md sm:text-lg dark:text-gray-300">
          {team.text}
        </p>
        <div className="flex items-center space-x-1">
          <Mail className="h-5 w-5 text-black" />
          <a
            className="truncate text-sm hover:underline dark:text-white"
            href={`mailto:${team.email}`}
          >
            <span>{team.email}</span>
          </a>
        </div>
        <div className="mt-2 flex items-center space-x-1">
          <Users className="h-5 w-5 text-black" />
          <span>{`${team.numberOfMembers} medlemmer`}</span>
        </div>
        <br />
        <NavLink
          type="button"
          to={team.url}
          className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 transition duration-300 hover:border-transparent hover:bg-blue-500 hover:text-white dark:bg-vektor-darkblue dark:text-white dark:hover:bg-blue-600"
          prefetch="intent"
        >
          {team.buttonName}
        </NavLink>
      </div>
      <div className="mt-6 flex max-h-80 items-center justify-center md:col-span-1 md:mt-auto md:p-4">
        <img
          src={team.image.src}
          alt={team.image.alt}
          className="max-h-80 object-contain"
        />
      </div>
    </div>
  );
}

function TeamTab({ team }: { team: CityPretty }) {
  const teams =
    team === "Bergen"
      ? teamsBergen()
      : team === "Ås"
        ? teamsAas()
        : teamsTrondheim();

  return (
    <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {teams.map((team) => (
        <Division
          key={team.mail}
          title={team.title}
          text={team.text}
          mail={team.mail}
          numberOfMembers={team.numberOfMembers}
          buttonName="Les mer"
          url={team.url}
        />
      ))}
    </div>
  );
}

function TeamTabs() {
  const [active, setActive] = useState<DepartmentPretty>("Trondheim");

  return (
    <div
      className="mb-6 flex max-w-[256px] flex-col items-start sm:max-w-[544px] md:mb-auto md:max-w-6xl md:flex-row"
      role="tablist"
    >
      <div className="md:absolute md:left-3 lg:left-12">
        <TabMenu
          tabs={Object.values(departments)}
          activeTab={active}
          setActiveTab={setActive}
        />
      </div>
      <div className="flex w-full max-w-5xl flex-col items-start">
        {active === "Hovedstyret" ? (
          <HovedstyretTab />
        ) : (
          <TeamTab team={active} />
        )}
      </div>
    </div>
  );
}

/* Division */

function Division({
  title,
  text,
  numberOfMembers,
  buttonName,
  url,
}: {
  title: string;
  text: string;
  mail: string;
  numberOfMembers: number;
  buttonName: string;
  url: To;
}) {
  return (
    <NavLink
      className={
        "flex h-48 w-64 flex-col justify-between rounded-md bg-vektor-light-blue shadow-md dark:bg-gray-600 dark:text-white"
      }
      to={url}
      prefetch="intent"
    >
      <div className="h-20 content-center rounded-t-md bg-vektor-blue dark:bg-vektor-darblue">
        <h3 className="text-center font-medium text-lg text-vektor-darblue dark:text-white">
          {title}
        </h3>
      </div>
      <div className="mx-3 my-2 h-full text-sm">
        <p>{text}</p>
      </div>
      <div className="mx-3 flex flex-row content-end gap-1 text-sm">
        <Users className="h-5 w-5 text-black" />
        <span>{`${numberOfMembers} medlemmer`}</span>
      </div>
      <div className="mr-1.5 mb-1.5 flex w-full justify-end self-end">
        <Button
          className="overflow-clip rounded-full"
          size="sm"
          variant="green"
          asChild
        >
          <Link to={url} prefetch="intent">
            {buttonName}
          </Link>
        </Button>
      </div>
    </NavLink>
  );
}
