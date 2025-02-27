import getContent from "@/api/Assistenter";
import { useRef, useState } from "react";

const Cities = {
  bergen: "Bergen",
  trondheim: "Trondheim",
  aas: "Ås",
} as const;
type City = typeof Cities[keyof typeof Cities];

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Assistenter() {
  const { title, ingress, cards } = getContent();

  const cardElement = useRef<HTMLDivElement>(null);
  const scrollToCard = () =>
    cardElement.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  return (
    <div className="leading-relaxed font-sans flex flex-col justify-center items-center dark:text-text-dark mt-10">
      <h1 className="font-sans max-w-2xl mt-10 text-vektor-DARKblue text-4xl text-center font-bold mx-3 dark:text-text-dark">
        {title}
      </h1>
      <div className="mt-8 mb-20 text-xl w-3/5">{ingress}</div>
      <div className="space-y-20 p-10 w-full text-center mb-14 border-secondary">
        <div className="conte mx-8 bg-center font-sans font-bold text-secondary dark:text-text-dark">
          Disse avdelingene har opptak nå:
        </div>
        <button
          type="button"
          onClick={scrollToCard}
          className="btn btn-success text-white font-bold py-2 px-4"
        >
          Scroll ned for å søke!
        </button>
      </div>
      <div className="info-background w-full pt-72 pb-72 mb-16 flex flex-col items-center space-y-10">
        <div className="w-fit text-accent font-bold text-3xl">
          Hvorfor bli assistent?
        </div>
        <div className="flex justify-evenly space-x-10 text-accent">
          {cards.map(({ title, text, image }) => (
            <div key={title} className="leading-relaxed flex w-full mx-auto justify-between flex-wrap">
              <div className="max-w-6xl ">
                <img
                  src={image.url.href}
                  alt={image.alt}
                  className="h-24 mt-6 rounded-lg mx-auto mb-2"
                />
                <div className="font-sans font-bold text-xl text-primary text-center p-1">
                  {title}
                </div>
                <div className="font-sans text-center my-1 dark:text-text-dark">
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
        <div className="my-2 mb-2 font-bold text-2xl text-secondary w-fit dark:text-text-dark">
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
          className="h-80 mt-6 rounded-lg mx-auto"
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
        <div className="font-bold text-2xl my-2 mb-3 text-vektor-darblue text-center dark:text-text-dark">
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
      <div className="text-vektor-DARKblue font-bold my-8 text-2xl text-center dark:text-text-dark">
        Hvordan blir jeg Vektorassistent?
      </div>
      <div className="flex flex-row space-x-16 dark:text-text-dark">
        <div className="flex-1 ...">
          <ul className="leading-loose whitespace-normal md:whitespace-pre list-disc ">
            <div className="text-vektor-darblue font-bold my-3 text-lg dark:text-text-dark">
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

        <div className="flex-2 ...">
          <div className="font-bold text-vektor-DARKblue my-3 text-lg dark:text-text-dark">
            Opptaksprosessen
          </div>
          <ol className="whitespace-normal md:whitespace-pre list-decimal leading-loose ">
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

      <div className="font-bold text-vektor-DARKblue text-3xl mt-16 mb-8 dark:text-text-dark">
        Søk nå!
      </div>

      <div ref={cardElement}>
        <Citycard />
      </div>

      <div className="font-bold mb-16 text-vektor-DARKblue">
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
        className={`tab tab-lifted w-1/3 text-base font-bold border-white dark:hover:bg-neutral-700 ${chosenStyle}`}
        onClick={onTabClick}
        data-toggle="tab"
        role="tablist"
      >
        {city}
      </button>
    );
  }
  return (
    <div className="w-full">
      <div
        className="tabs w-full flex text-sm font-medium text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-900"
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
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-b-[1px] border-r-[1px] border-l-[1px] px-4 py-5 flex-auto tab-content tab-space dark:bg-neutral-800">
        <ApplyReg cities={openTab} />
      </div>
    </div>
  );
}

function ApplyReg({ cities }: { cities: City }) {
  return (
    <form className="dark:bg-neutral-800">
      <h1 className="text-xl my-8 text-vektor-darblue font-bold text-center dark:text-gray-200">
        {cities}
      </h1>

      <div className="mt-1 mb-8 text-center dark:text-gray-300">
        Søknadsfrist:{" "}
      </div>

      <div className="grid justify-items-center dark:text-gray-800">
        <div className="flex flex-wrap w-full my-4 space-x-8 justify-center">
          <input
            type="fornavn"
            className="mb-2 p-1 rounded block border-solid border-2 border-vektor-darblue"
            placeholder="Fornavn"
          />

          <input
            type="etternavn"
            className="mb-2 p-1 rounded block border-solid border-2 border-vektor-darblue"
            placeholder="Etternavn"
          />
        </div>

        <div className="flex mt-3 justify-center w-full">
          <input
            type="email"
            className="mb-2 p-1 rounded inline-flex items-center form-input w-1/2 border-solid border-2 border-vektor-darblue"
            placeholder="E-post"
          />
        </div>

        <div className="flex mt-3 justify-center w-full">
          <input
            type="telefon"
            className="mb-2 p-1 rounded inline-flex items-center form-input w-1/2 border-solid border-2 border-vektor-darblue"
            placeholder="Telefon nr"
          />
        </div>

        <div className="flex mt-3 justify-center w-full">
          <input
            type="linje"
            className="mb-2 p-1 rounded inline-flex items-center form-input w-1/2 border-solid border-2 border-vektor-darblue"
            placeholder="Linje"
          />
        </div>

        <div className="my-4 space-x-4">
          <select
            className="p-2 rounded border-solid border-2 border-vektor-darblue text-vektor-darblue font-bold"
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
            className="p-2 rounded border-solid border-2 border-vektor-darblue text-vektor-darblue font-bold"
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
          className="bg-vektor-darblue hover:bg-vektor-blue text-white font-bold py-2 px-4 m-8 rounded "
        >
          Søk nå!
        </button>
      </div>
      <div className="items-center mx-16 mb-10 text-center dark:text-gray-300">
        Har du vært assistent tidligere? Da kan du søke på nytt her (krever
        innlogging)
      </div>
    </form>
  );
}

function NoApplyCard ({ cities }: { cities: City}) {
  return (
    <form>
      <h1 className="font-bold text-xl my-8 text-vektor-darblue"> {cities}</h1>

      <div className="block mt-3">
        <input
          type="email"
          className="inline-flex items-center form-input border-solid border-2 border-grey"
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
        className="bg-vektor-darkblue hover:bg-vektor-blue text-white font-bold py-2 px-4 border border-blue-700 m-8 rounded"
      >
        Send
      </button>
    </form>
  );
};