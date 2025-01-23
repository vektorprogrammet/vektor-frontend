import type { JSX } from "react";

import TeamTemplate from "../TeamTemplate";

const Skolekoordinering = (): JSX.Element => {
  return (
    <div className="max-w-screen-lg mt-5 mb-20 mx-auto flex flex-col">
      <TeamTemplate
        name="Skolekoordinering"
        mail="skolekoordinering.ntnu@vektorprogrammet.no"
        text="Skolekoordinering fungerer som et bindeledd mellom skolene og vektorassistentene gjennom semesteret."
        members={[
          {
            name: "Tina Jota",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633f04baf19bc.jpeg",
            role: "Leder",
          },
          {
            name: "Inga Bordal",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633f03f274e81.jpeg",
            role: "Medlem",
          },
          {
            name: "Ragna Vårli Håland",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633f033cb4d48.jpeg",
            role: "Medlem",
          },
          {
            name: "Kaja Prestnes Lind",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6346def4754db.jpeg",
            role: "Medlem",
          },
          {
            name: "Hennie Wien",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633f0a0108caf.jpeg",
            role: "Medlem",
          },
          {
            name: "Sonja Salvesen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/633f058743387.jpeg",
            role: "Medlem",
          },
          {
            name: "Silje Eriksen",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6418910b565a8.jpeg",
            role: "Medlem",
          },
          {
            name: "Mari Egeland",
            image:
              "https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/6418918cae91f.jpeg",
            role: "Medlem",
          },
        ]}
      />

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-20 mb-7">
        Arbeidet vårt
      </div>

      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/Skolekoordinering/IMG_2564%203.jpg"
          className="md:max-w-2xl h-auto content-center mx-auto m-3"
        />
      </div>

      <div className="font-sans text-lg text-black text-start mx-5 mt-10">
        Skolekoordineringsteamet har ansvaret for å fordele vektorassistentene
        på samarbeidsskolene våre. Der er vi som er bindeleddet mellom
        vektorprogrammet og vektorassistentene, samt vektorprogrammet og skolene
        gjennom semesteret. I praksis vil det si å være tilgjengelig på mail,
        skaffe eventuelle vikarer for vektorassistenter som ikke kan møte, og
        videreformidle informasjon. Skulle det oppstå noe vektorassistentene har
        behov for å si i fra om, skal det være lav terskel for å kontakte en
        skolekoordinator.
      </div>

      <div className="font-sans text-lg text-black text-start mx-5 mt-5 mb-10">
        Én av teamets hovedoppgaver i løpet av hvert semester er å arrangere
        foreldrekurs. I løpet av en til to kvelder får foreldre til
        ungdomsskoleelever en innføring i motivasjon, pedagogikk og matematikk
        tilpasset ungdomsskolenivå. Dette har hittil vært en stor suksess, ikke
        bare for foreldrene som deltar, men også fordi det har bidratt til det
        sosiale i Vektorprogrammet. Skolekoordinering inviterer alle team til å
        bli med å hjelpe til under kurskveldene, og det er god stemning på
        vektorkontoret under hele arrangementet med både kake og pizza.
      </div>

      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/Skolekoordinering/211118-170639.png"
          className="md:max-w-2xl h-auto content-center mx-auto m-3"
        />
      </div>

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-16 mb-5">
        Sosialt i skolekoordinering
      </div>

      <div className="font-sans text-lg text-black text-start mx-5 mt-5">
        Skolekoordinering har møter hver uke, og alle i teamet er enig om at
        dette er et av ukens høydepunkter. Det er obligatorisk med kake på
        møtene og det er alltid mye latter. Vi holder jevnlig kontakt på slack,
        og finner på mye sosialt utenom møtene. Vi i skolekoordinering spiser en
        del mat sammen, og da gjerne søndagsbrunsj eller middag på Lyche. Teamet
        stiller som regel alltid sterkt på diverse sosiale arrangementer i
        Vektorprogrammet slik som hyttetur og fester.
      </div>

      <div className="font-sans text-lg text-black text-start mx-5 mt-5 mb-7">
        Skolekoordinering jobber iherdig for å knytte Vektorprogrammet tettere
        sammen, og derfor arrangerer vi åpent kontor jevnlig gjennom semesteret.
        Her inviteres assistenter og team-medlemmer for et hyggelig avbrekk i
        hverdagen med kaffe, kake og kos på kontoret. Dersom du ønsker å smake
        på tidenes beste brownies er dette stedet å være!
      </div>

      <div className="m-3">
        <img
          src="https://vektorprogrammet.no/images/team_images/Skolekoordinering/IMG_3596.jpg"
          className="md:max-w-2xl h-auto content-center mx-auto m-3"
        />
      </div>

      <div className="font-sans text-3xl text-vektor-darblue text-bold text-center mt-16 mb-4">
        Opptak
      </div>

      <div className="font-sans text-lg text-black text-start mx-5 mt-5">
        Arbeidsmengden som skolekoordinator ligger på rundt 2 timer i uka,
        utenom eksamensperioden - da er det selvfølgelig ingen arbeidsoppgaver,
        kun frivillige sosiale arrangementer.
      </div>

      <div className="font-sans text-lg text-black text-start mx-5 mt-5">
        Skolekoordineringsteamet er nå på utkikk etter deg som ønsker å:
      </div>

      <div className="grid md:grid-cols-2 ml-4 mr-4 mt-5 items-center mb-2">
        <div className="font-sans text-lg text-black place-content-start">
          <ul className="ml-10 list-disc">
            <li>
              Ha ansvar for egne skoler og tilhørende assistenter gjennom
              semesteret.
            </li>
            <li>
              Være med å utforme nye prosjekter og holde kontakt med
              vektorassistenter.
            </li>
            <li>
              Bli kjent med mennesker på tvers av linjer og team, og være del av
              et sosialt og hyggelig team.
            </li>
            <li>
              Få muligheten til å ta del i Vektorprogrammets utvikling og få
              innsikt i en stor organisasjon sin oppbygning.
            </li>
            <li>
              Få et meningsfylt verv i en organisasjon som kontinuerlig jobber
              for å fremme mestring innen realfag.
            </li>
            <li>
              Få god erfaring innen administrering og organisering av mange
              mennesker på ulike plan.
            </li>
            <li>Få en relevant attest til senere jobbsøking.</li>
          </ul>
          <div className="my-6">
            Så for en relativ liten arbeidsinnsats, får man en veldig mye
            tilbake!{" "}
          </div>
        </div>

        <img
          className="max-h-96 sm:max-w-sm h-auto content-center mx-auto"
          src="/images/team/SkolekoordineringTor.png"
        />
      </div>

      <div className="ml-4 mt-5 place-self-start font-sans text-lg text-black">
        Sitter du inne med spørsmål, ta mer enn gjerne kontakt med oss på{" "}
        <a
          className="hover:underline text-vektor-darblue break-all"
          href="mailto:skolekoordinering.ntnu@vektorprogrammet.no"
        >
          skolekoordinering.ntnu@vektorprogrammet.no.
        </a>
      </div>

      <div className="font-sans text-lg text-black text-start ml-4 mt-5">
        Vi gleder oss til å høre fra deg!
      </div>
    </div>
  );
};

export default Skolekoordinering;
