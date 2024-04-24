import React, { useRef } from "react";
import getContent from "api/Assistenter";
import TextPictureCard from "./AssistenterCard";
import Citycard from "./CityCard/Citycard";

const Assistenter = (): JSX.Element => {
  const { title, ingress, cards } = getContent();

  const cardElement = useRef<HTMLDivElement>(null);
  const scrollToCard = () => cardElement.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  return (
    <div className="leading-relaxed font-sans max-w-md mx-auto md:max-w-2xl flex flex-col justify-center items-center dark:text-gray-300">
      <div className="bg-vektor-bg" />
      <h1 className="font-sans max-w-2xl mt-10 text-vektor-darblue text-4xl text-center font-bold mx-3 dark:text-gray-200">
        {title}
      </h1>
      <div className="mt-4 mb-20 text-xl ">{ingress}</div>

      <div className="border-solid border-2 border-vektor-darblue bg-white space-y-16 p-4 w-full text-center mb-14 dark:bg-neutral-800">
        <div className="conte mx-8 bg-center font-sans font-bold text-vektor-darblue dark:text-gray-300">
          Disse avdelingene har opptak nå:
        </div>

        <button
          type="button"
          onClick={scrollToCard}
          className="outline-0 bg-vektor-darblue hover:bg-vektor-blue text-white font-bold py-2 px-4 rounded"
        >
          Scroll ned for å søke!
        </button>
      </div>

      <div className="mb-16 flex justify-evenly space-x-10">
        {cards.map(({ title: cardTitle, text, image }) => (
          <TextPictureCard
            key={cardTitle}
            title={cardTitle}
            text={text}
            imgPath={image.url}
            alt={image.alt}
          />
        ))}
      </div>

      <div className="mb-16 dark:text-gray-300" id="tc">
        <div className="my-2 mb-2 font-bold text-2xl text-center text-vektor-darblue dark:text-gray-300">
          Lærerassistent i matematikk
        </div>

        <div className="mb-4 dark:text-gray-300">
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
        <div className="mt-4 dark:text-gray-300">
          I tillegg vil du få muligheten til å delta på mange sosiale
          arrangementer, alt fra fest og grilling til go-kart, laser tag og
          spillkvelder. Samtidig arrangerer vi populærforedrag som er til for å
          øke motivasjonen din for videre studier. Vi har hatt besøk av blant
          annet Andreas Wahl, Jo Røislien, Knut Jørgen Røed Ødegaard og James
          Grime.
        </div>
      </div>

      <div className="mb-16 dark:text-gray-300">
        <div className="font-bold text-2xl my-2 mb-3 text-vektor-darblue text-center dark:text-gray-300">
          Arbeidsoppgaver
        </div>

        <div>
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

      <div className="text-vektor-darblue font-bold my-8 text-2xl text-center dark:text-gray-300">
        Hvordan blir jeg Vektorassistent?
      </div>
      <div className="flex flex-row space-x-16 dark:text-gray-300">
        <div className="flex-1 ...">
          <ul className="leading-loose whitespace-normal md:whitespace-pre list-disc ">
            <div className="text-vektor-darblue font-bold my-3 text-lg dark:text-gray-300">
              Opptakskrav
            </div>

            <li>Du studerer på høgskole/universitet</li>
            <li>Du har hatt R1/S2 på videregående</li>
            <li>
              Du har tid til å dra til en ungdomsskole én dag i uka (kl. 8-14)
              <br />
              i en periode på 4 eller 8 uker
            </li>
          </ul>
        </div>

        <div className="flex-2 ...">
          <div className="font-bold text-vektor-darblue my-3 text-lg dark:text-gray-300">
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

      <div className="font-bold text-vektor-darblue text-3xl mt-16 mb-8 dark:text-gray-200">
        Søk nå!
      </div>

      <div ref={cardElement}>
        <Citycard />
      </div>

      <div className="font-bold mb-16 text-vektor-darblue">
        Har du noen spørsmål? Sjekk ut ofte stilte spørsmål og svar.
      </div>
    </div>
  );
};

export default Assistenter;
