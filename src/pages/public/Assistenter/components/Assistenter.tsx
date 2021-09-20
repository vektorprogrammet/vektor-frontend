import React from "react";
import getContent from "api/Assistenter";
import TextPictureCard from "pages/AssistenterCard";
import {scrollToBottom} from "pages/AssistenterCard";
document.body.style.backgroundColor = "#fafdff";

const Assistenter = (): JSX.Element => {
  const {
    title, ingress, cards, bottomText,
  } = getContent();
  return (

    <div className="max-w-md mx-auto md:max-w-2xl flex flex-col flex justify-center items-center ">

      <div className="bg-gray-600"/>
      <h1 className="max-w-2xl mt-10 text-gray-600 text-4xl text-center font-bold mx-3">
        {title}
      </h1>
      <div className="mt-4 mb-20 text-xl">{ingress} </div>

        <div className="bg-gray-200 space-y-16 p-4 w-full text-center">
            <p className="bg-center">
                Disse avdelingene har opptak nå:
            </p>


            <button onClick={scrollToBottom} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Scroll ned for å søke!

            </button>

        </div>

      <div className="mb-20">
        <p className="flex justify-evenly space-x-10">
          {cards.map(({ title: cardTitle, text, image }) => (
            <TextPictureCard
              key={cardTitle}
              title={cardTitle}
              text={text}
              imgPath={image.url}
              alt={image.alt}
            />
          ))}
        </p>
      </div>

      <div className="mb-16">
        <p className="font-bold text-2xl text-center">
          Lærerassistent i matematikk
        </p>

        <p>
          Vektorprogrammet er en studentorganisasjon som sender realfagssterke
          studenter til grunnskolen for å hjelpe
          elevene med matematikk i skoletiden.
          Vi ser etter deg som lengter etter en mulighet til å lære bort
          kunnskapene du sitter med og ønsker å ta del i et sterkt sosialt fellesskap.
          Etter å ha vært
          vektorassistent kommer du til å sitte igjen med mange gode erfaringer
          og nye venner på tvers av trinn og linje.
        </p>
        {bottomText}

        <img
          src="https://vektorprogrammet.no/images/teacher.png?v=1598900041"
          className="h-80 mt-6 rounded-lg mx-auto"
          alt="vektorbilde"
        />
        <p>
          I tillegg vil du få muligheten til å delta på mange sosiale arrangementer,
          alt fra fest og grilling til go-kart, laser tag og spillkvelder.
          Samtidig arrangerer vi populærforedrag som er til for å øke motivasjonen
          din for videre studier. Vi har hatt besøk av blant annet Andreas Wahl,
          Jo Røislien, Knut Jørgen Røed Ødegaard og James Grime.
        </p>

      </div>

      <div className="mb-16">
        <p className="font-bold text-2xl text-center">
          Arbeidsoppgaver
        </p>

        <p>
          Som vektorassistent er du ute én dag i uka,
          i 4 eller 8 uker, på en ungdomsskole i nærområdet.
          Vi tilpasser timeplanen slik at du selv kan bestemme hvilken
          dag som passer best. Vektorassistenter blir sendt ut i par,
          slik at du alltid kan ha noen å støtte deg på.
          Oppgavene dine vil variere fra å gå rundt i klasserommet og hjelpe elever med oppgaver,
          til å gjennomgå utvalgte temaer i mindre grupper.
          Det er læreren som bestemmer hva som skal bli gjennomgått.
          Dette arbeidet blir satt stor pris på av både barn og lærere!
        </p>

      </div>

      <p className="font-bold text-2xl text-center">
        Hvordan blir jeg Vektorassistent?
      </p>

    <div className="flex flex-row ">
      <div className="inline-flex space-x-16">
        <div className="flex-1 ...">
          <ul className="whitespace-normal md:whitespace-pre list-disc text-sm">

            <p className="font-bold my-3">
              Opptakskrav
            </p>
            <li>Du studerer på høgskole/universitet</li>
            <li>Du har hatt R1/S2 på videregående</li>
            <li>Du har tid til å dra til en ungdomsskole én dag i uka (kl. 8-14)</li>

          </ul>
        </div>

        <div className="flex-2 ..." >

        <ol className="whitespace-normal md:whitespace-pre list-decimal text-sm">
          <p className="font-bold my-3">
            Opptaksprosessen
          </p>
          <li>Vektorprogrammet tar opp nye assistenter i starten av hvert semester</li>
          <li>Send inn søknad fra skjemaet lengre ned på denne siden</li>
          <li>Møt opp på intervju slik at vi kan bli bedre kjent med deg</li>
          <li>Dra på et gratis forberedelseskurs arrangert av Vektorprogrammet</li>
          <li>Få tildelt en ungdomsskole som du og din vektorpartner skal dra til</li>

        </ol>
        </div>

      </div>
    </div>
      <div className="font-bold text-3xl">
        <p>
          Søk nå!
        </p>
      </div>



</div>

  );
};

export default Assistenter;
