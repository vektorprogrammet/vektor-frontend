import Divider from "@/components/Divider";
import ImageCard from "@/components/TextPictureCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

interface TextAndPicture {
  title: string;
  text: string;
  image: {
    url: URL;
    alt: string;
  };
  pictureOnLeft?: boolean;
}

const cards: TextAndPicture[] = [
  {
    title: "Motivere elever",
    text: `Vektorprogrammet ønsker å øke
   matematikkforståelsen blant elever i grunnskolen. Forståelse
    gir mestringsfølelse som fører til videre motivasjon. Siden
     matematikk er grunnlaget for alle realfag er målet at dette
      også skal føre til motivasjon og videre utforskning av realfagene.`,
    image: {
      url: new URL(
        "https://vektorprogrammet.no/images/tormedmer.jpg?v=1598900041",
      ),
      alt: "Kosing med Tor.",
    },
  },
  {
    title: "Motivere studenter",
    text: `Vi har som mål at alle studentene skal 
      sitte igjen mer motivert for videre studier 
      etter å ha vært vektorassistent. Av erfaring 
      vet vi at muligheten til å formidle egen kunnskap
       og se at deres arbeid gir elevene 
       mestringsfølelse er en sterk motivasjonsfaktor. Videre arrangerer
        vi både sosiale og faglige arrangementer for å
         forsterke denne motivasjonen.`,
    image: {
      url: new URL(
        "https://vektorprogrammet.no/images/membersV18.JPG?v=1598900041",
      ),
      alt: "Samlede vektormedlemmer.",
    },
    pictureOnLeft: true,
  },
];

interface AccordionType {
  title: string;
  content: string;
}

const assistantAccordions: AccordionType[] = [
  {
    title: "Er verv i Vektorprogrammet betalt?",
    content:
      "Vektorprogrammet er en frivillig, studentdrevet organisasjon, der alle medlemmer jobber som frivillige. Du får delta på sosiale arrangementer og muligheten til å påvirke en organisasjon som er den største av sitt slag.",
  },
  {
    title: "Hvor stor er arbeidsmengden for en vektorassistent?",
    content:
      "Enkel stilling tilsvarer 4 skoledager på en ungdomsskole, fordelt over 4 uker. Dobbel stilling tilsvarer 8 skoledager fordelt over åtte uker. En vanlig skoledag er som regel fra 08:00-14:00, og i tillegg kommer transporttid.",
  },
  {
    title: "Får jeg en attest dersom jeg har vært vektorassistent?",
    content:
      "Ja, det gjør du. Disse deles normalt ut på avslutningen for vektorassistentene det tilhørende semesteret, men dersom du av en eller annen grunn ikke kunne delta, ta kontakt med ditt lokalstyre via mail. Vil du ha attest for tidligere semester? Ta også kontakt med ditt lokalstyre på mail.",
  },
  {
    title:
      "Hva gjør jeg dersom klassen jeg skal være i ikke er tilstede eller dersom det er feil i timeplanen jeg har fått fra Vektorprogrammet?",
    content:
      "Ta kontakt med din skolekoordinator og forklar situasjonen. Dette er den personen du fikk skoledokumentene av.",
  },
  {
    title: "Får jeg noen ekstra utgifter av å være vektorassistent?",
    content:
      "Nei, Vektorprogrammet dekker bussbilletter, t-skjorte og forberedelseskurs.",
  },
  {
    title: "Hva er forberedelseskurs?",
    content:
      "Alle nye vektorassistenter må delta på et forberedelseskurs i starten av semesteret for å få en enkel innføring i hvordan man kan lære bort til andre på en god måte.",
  },
  {
    title:
      "Jeg har vært vektorassistent før, må jeg på intervju eller forberedelseskurs igjen?",
    content:
      "Nei, alle tidligere vektorassistenter trenger kun å søke via nettsiden. For å få eventuelle bussbilletter må du møte opp på slutten av forberedelseskurset.",
  },
  {
    title: "Jeg glemte søknadsfristen. Hva gjør jeg nå?",
    content:
      "Gå til 'Kontakt' i menyen og velg din region. Der finnes det ett kontaktskjema som du kan fylle ut, så finner vi ut av det sammen.",
  },
  {
    title: "Kan jeg være vektorassistent flere semestre?",
    content:
      "Ja, men du må huske å søke på nytt hvert semester! Du trenger ikke gå gjennom intervju og forberedelseskurs på nytt.",
  },
];

const teamAccordions: AccordionType[] = [
  {
    title: "Hvordan søker jeg team?",
    content:
      "Gå inn på denne siden her, finn et eller flere team du er interessert i. Hvis dette teamet tar opp nye medlemmer vil det være en knapp hvor du kan søke. Hvis det ikke er opptak kan du sende en mail til teamleder og si ifra at du er interessert.",
  },
  {
    title: "Hva er forskjellen på vektorassistent og teammedlem?",
    content:
      "Som vektorassistent vil man reise til ungdomsskolen som lærerassistent, mens som teammedlem er man med på å påvirke Vektorprogrammet som organisasjon. Som teammedlem blir man altså med i administrasjonen, og arbeidsoppgavene avhenger av hvilket team man er med i.",
  },
  {
    title: "Går det an å både være vektorassistent og med i team samtidig?",
    content:
      "Det er fullt mulig å være begge deler samtidig. Som vektorassistent vil man kun bli sendt ut 4 eller 8 ganger per semester. Dette gjør at arbeidsmengden er overkommelig, og kan fint kombineres med teamarbeid og studier.",
  },
  {
    title: "I hvilke regioner holder Vektorprogrammet til?",
    content: "Trondheim, Bergen og Ås",
  },
];

const OmOss = (): JSX.Element => {
  const accordionSection = (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl text-vektor-DARKblue dark:text-gray-200">
        Assistent
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {assistantAccordions.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>
              <p className="text-left">{title}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-left">{content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Divider />
      <h2 className="text-2xl text-vektor-DARKblue mb-3 dark:text-gray-200">
        Team
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {teamAccordions.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>
              <p className="text-left">{title}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-left">{content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="flex flex-col self-center max-w-4xl p-5 mt-20 mb-20 gap-3 md:gap-28 dark:text-text-dark">
      <div className="flex flex-col max-w-full gap-3 md:gap-5">
        <h1 className="text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
          Om Vektorprogrammet
        </h1>
        <p className="text-md md:text-lg">
          {`
          Vektorprogrammet arbeider for å øke interessen for matematikk 
          og realfag blant elever i grunnskolen. Vi er en nasjonal studentorganisasjon
          som sender studenter med god realfagskompetanse til skoler
            for å hjelpe elevene i matematikktimene. Disse
            studentene har også gode pedagogiske evner og
              er gode rollemodeller – de er Norges realfagshelter.
          `}
        </p>
        <Divider />
      </div>
      {cards.map((card, index) => (
        <ImageCard
          key={card.title}
          title={card.title}
          text={card.text}
          imgPath={card.image.url.toString()}
          alt={card.image.alt}
          pictureOnLeft={index % 2 === 0}
        />
      ))}
      <div className="flex flex-col w-full gap-3 md:gap-5">
        <h1 className="text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
          En forsmak til læreryrket!
        </h1>
        <p className="text-md md:text-lg">
          {`Siden studentene er tilstede i
          undervisningen får de en introduksjon til
          læreryrket. Mange som studerer realfag
          vurderer en fremtid som lærer,
          og får gjennom oss muligheten til
          å få reell erfaring.`}
        </p>
        <img
          className="mt-0"
          alt=""
          src="https://vektorprogrammet.no/images/nett.jpg?v=1598900041"
        />
        <Divider />
      </div>
      <div className="flex flex-col w-full gap-10">
        <h1 className="w-full text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
          Ofte stilte spørsmål og svar
        </h1>
        {accordionSection}
      </div>
    </div>
  );
};

export default OmOss;
