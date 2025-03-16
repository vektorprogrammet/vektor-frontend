import { getAssistenter } from "@/api/assistenter";
import { useRef, useState } from "react";

const Cities = {
  bergen: "Bergen",
  trondheim: "Trondheim",
  aas: "Ås",
} as const;
type City = (typeof Cities)[keyof typeof Cities];

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Assistenter() {
  const { title, ingress, cards } = getAssistenter();

  const cardElement = useRef<HTMLDivElement>(null);
  const scrollToCard = () =>
    cardElement.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return (
    <div className="mt-10 flex flex-col items-center justify-center font-sans leading-relaxed dark:text-text-dark">
      <h1 className="mx-3 mt-10 max-w-2xl text-center font-bold font-sans text-4xl text-vektor-DARKblue dark:text-text-dark">
        {title}
      </h1>
      <div className="mt-8 mb-20 w-3/5 text-xl">{ingress}</div>
      <div className="mb-14 w-full space-y-20 border-secondary p-10 text-center">
        <div className="conte mx-8 bg-center font-bold font-sans text-secondary dark:text-text-dark">
          Disse avdelingene har opptak nå:
        </div>
        <button
          type="button"
          onClick={scrollToCard}
          className="btn btn-success px-4 py-2 font-bold text-white"
        >
          Scroll ned for å søke!
        </button>
      </div>
      <div className="info-background mb-16 flex w-full flex-col items-center space-y-10 pt-72 pb-72">
        <div className="w-fit font-bold text-3xl text-accent">
          Hvorfor bli assistent?
        </div>
        <div className="flex justify-evenly space-x-10 text-accent">
          {cards.map(({ title, text, image }) => (
            <div
              key={title}
              className="mx-auto flex w-full flex-wrap justify-between leading-relaxed"
            >
              <div className="max-w-6xl ">
                <img
                  src={image.url.href}
                  alt={image.alt}
                  className="mx-auto mt-6 mb-2 h-24 rounded-lg"
                />
                <div className="p-1 text-center font-bold font-sans text-primary text-xl">
                  {title}
                </div>
                <div className="my-1 text-center font-sans dark:text-text-dark">
                  {text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mb-16 flex flex-col items-center dark:text-text-dark"
        id="tc"
      >
        <div className="my-2 mb-2 w-fit font-bold text-2xl text-secondary dark:text-text-dark">
          Lærerassistent i matematikk
        </div>
        <div className="mb-4 w-3/5 dark:text-text-dark">
          Vektorprogrammet er en studentorganisasjon som sender realfagssterke
          studenter til grunnskolen for å hjelpe elevene med matematikk i
          skoletiden. Vi ser etter deg som lengter etter en mulighet til å lære
          bort kunnskapene du sitter med og ønsker å ta del i et sterkt sosialt
          fellesskap. Etter å ha vært vektorassistent kommer du til å sitte
          igjen med mange gode erfaringer og nye venner på tvers av trinn og
          linje.
        </div>

        <img
          src="https://vektorprogrammet.no/images/teacher.png?v=1598900041"
          className="mx-auto mt-6 h-80 rounded-lg"
          alt="vektorbilde"
        />
        <div className="mt-4 w-3/5 dark:text-text-dark">
          I tillegg vil du få muligheten til å delta på mange sosiale
          arrangementer, alt fra fest og grilling til go-kart, laser tag og
          spillkvelder. Samtidig arrangerer vi populærforedrag som er til for å
          øke motivasjonen din for videre studier. Vi har hatt besøk av blant
          annet Andreas Wahl, Jo Røislien, Knut Jørgen Røed Ødegaard og James
          Grime.
        </div>
      </div>

      <div className="mb-16 flex flex-col items-center dark:text-text-dark">
        <div className="my-2 mb-3 text-center font-bold text-2xl text-vektor-darblue dark:text-text-dark">
          Arbeidsoppgaver
        </div>

        <div className="w-3/5">
          Som vektorassistent er du ute én dag i uka, i 4 eller 8 uker, på en
          ungdomsskole i nærområdet. Vi tilpasser timeplanen slik at du selv kan
          bestemme hvilken dag som passer best. Vektorassistenter blir sendt ut
          i par, slik at du alltid kan ha noen å støtte deg på. Oppgavene dine
          vil variere fra å gå rundt i klasserommet og hjelpe elever med
          oppgaver, til å gjennomgå utvalgte temaer i mindre grupper. Det er
          læreren som bestemmer hva som skal bli gjennomgått. Dette arbeidet
          blir satt stor pris på av både barn og lærere!
        </div>
      </div>
      <div className="my-8 text-center font-bold text-2xl text-vektor-DARKblue dark:text-text-dark">
        Hvordan blir jeg Vektorassistent?
      </div>
      <div className="flex flex-row space-x-16 dark:text-text-dark">
        <div className="flex-1">
          <ul className="list-disc whitespace-normal leading-loose md:whitespace-pre ">
            <div className="my-3 font-bold text-lg text-vektor-darblue dark:text-text-dark">
              Opptakskrav
            </div>

            <li>Du studerer på høgskole/universitet</li>
            <li>Du har hatt R1/S2 på videregående</li>
            <li>
              Du har tid til å dra til en ungdomsskole én dag i uka (kl. 8-14)
              <br />i en periode på 4 eller 8 uker
            </li>
          </ul>
        </div>

        <div className="flex-2">
          <div className="my-3 font-bold text-lg text-vektor-DARKblue dark:text-text-dark">
            Opptaksprosessen
          </div>
          <ol className="list-decimal whitespace-normal leading-loose md:whitespace-pre">
            <li>
              Vektorprogrammet tar opp nye assistenter i starten av hvert
              semester
            </li>
            <li>Send inn søknad fra skjemaet lengre ned på denne siden</li>
            <li>Møt opp på intervju slik at vi kan bli bedre kjent med deg</li>
            <li>
              Dra på et gratis forberedelseskurs arrangert av Vektorprogrammet
            </li>
            <li>
              Få tildelt en ungdomsskole som du og din vektorpartner skal dra
              til
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-16 mb-8 font-bold text-3xl text-vektor-DARKblue dark:text-text-dark">
        Søk nå!
      </div>

      <div ref={cardElement}>
        <Citycard />
      </div>

      <div className="mb-16 font-bold text-vektor-DARKblue">
        Har du noen spørsmål? Sjekk ut ofte stilte spørsmål og svar.
      </div>
    </div>
  );
}

function Citycard() {
  const [openTab, setOpenTab] = useState<City>("Trondheim");
  function Tab({
    city,
    onTabClick,
    open,
  }: {
    onTabClick: () => void;
    city: City;
    open: boolean;
  }) {
    const chosenStyle = open
      ? "tab-active dark:text-vektor-darblue"
      : "text-vektor-darblue dark:text-gray-300";
    return (
      <button
        type="button"
        className={`tab tab-lifted w-1/3 border-white font-bold text-base dark:hover:bg-neutral-700 ${chosenStyle}`}
        onClick={onTabClick}
        data-toggle="tab"
      >
        {city}
      </button>
    );
  }
  return (
    <div className="w-full">
      <div
        className="tabs flex w-full border-gray-200 font-medium text-gray-500 text-sm dark:border-gray-700 dark:text-gray-900"
        role="tablist"
      >
        {Object.values(Cities).map((city) => (
          <Tab
            city={city}
            onTabClick={() => setOpenTab(city)}
            open={openTab === city}
            key={city}
          />
        ))}
      </div>
      <div className="tab-content tab-space relative mb-6 flex w-full min-w-0 flex-auto flex-col break-words border-r-[1px] border-b-[1px] border-l-[1px] px-4 py-5 dark:bg-neutral-800">
        <ApplyReg cities={openTab} />
      </div>
    </div>
  );
}

function ApplyReg({ cities }: { cities: City }) {
  return (
    <form className="dark:bg-neutral-800">
      <h1 className="my-8 text-center font-bold text-vektor-darblue text-xl dark:text-gray-200">
        {cities}
      </h1>

      <div className="mt-1 mb-8 text-center dark:text-gray-300">
        Søknadsfrist:{" "}
      </div>

      <div className="grid justify-items-center dark:text-gray-800">
        <div className="my-4 flex w-full flex-wrap justify-center space-x-8">
          <input
            type="fornavn"
            className="mb-2 block rounded border-2 border-vektor-darblue border-solid p-1"
            placeholder="Fornavn"
          />

          <input
            type="etternavn"
            className="mb-2 block rounded border-2 border-vektor-darblue border-solid p-1"
            placeholder="Etternavn"
          />
        </div>

        <div className="mt-3 flex w-full justify-center">
          <input
            type="email"
            className="form-input mb-2 inline-flex w-1/2 items-center rounded border-2 border-vektor-darblue border-solid p-1"
            placeholder="E-post"
          />
        </div>

        <div className="mt-3 flex w-full justify-center">
          <input
            type="telefon"
            className="form-input mb-2 inline-flex w-1/2 items-center rounded border-2 border-vektor-darblue border-solid p-1"
            placeholder="Telefon nr"
          />
        </div>

        <div className="mt-3 flex w-full justify-center">
          <input
            type="linje"
            className="form-input mb-2 inline-flex w-1/2 items-center rounded border-2 border-vektor-darblue border-solid p-1"
            placeholder="Linje"
          />
        </div>

        <div className="my-4 space-x-4">
          <select
            className="rounded border-2 border-vektor-darblue border-solid p-2 font-bold text-vektor-darblue"
            defaultValue="Kjønn"
          >
            <option value="Kjønn" disabled>
              Kjønn
            </option>
            <option>Mann</option>
            <option>Kvinne</option>
            <option>Annet</option>
          </select>

          <select
            className="rounded border-2 border-vektor-darblue border-solid p-2 font-bold text-vektor-darblue"
            defaultValue="Årstrinn"
          >
            <option value="Årstrinn" disabled>
              Årstrinn
            </option>
            <option>1. klasse</option>
            <option>2. klasse</option>
            <option>3. klasse</option>
            <option>4. klasse</option>
            <option>5. klasse</option>
          </select>
        </div>
        <button
          type="submit"
          className="m-8 rounded bg-vektor-darblue px-4 py-2 font-bold text-white hover:bg-vektor-blue "
        >
          Søk nå!
        </button>
      </div>
      <div className="mx-16 mb-10 items-center text-center dark:text-gray-300">
        Har du vært assistent tidligere? Da kan du søke på nytt her (krever
        innlogging)
      </div>
    </form>
  );
}

function NoApplyCard({ cities }: { cities: City }) {
  return (
    <form>
      <h1 className="my-8 font-bold text-vektor-darblue text-xl"> {cities}</h1>

      <div className="mt-3 block">
        <input
          type="email"
          className="form-input inline-flex items-center border-2 border-grey border-solid"
          placeholder="E-post"
        />
      </div>

      <div className="block">
        <div className="mt-2">
          <div>
            <div className="inline-flex items-center text-left">
              <input type="checkbox" className="form-checkbox" />
              <span className="m-2">Få påminnelse når opptaket starter </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="flex items-center" />
      </div>

      <button
        type="submit"
        className="m-8 rounded border border-blue-700 bg-vektor-darkblue px-4 py-2 font-bold text-white hover:bg-vektor-blue"
      >
        Send
      </button>
    </form>
  );
}
