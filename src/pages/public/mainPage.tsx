import react from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from "react-router-dom";

import vektorLogo from "/images/vektor-logo.svg";
import vektorForsidebilde from "/images/mainPage/vektor-forsidebilde.png";
import Abelprisen from "/images/mainPage/sponsor/Abelprisen.png";
import KSBergen from "/images/mainPage/sponsor/KSBergen.png";
import SparebankstiftelsenDNB from "/images/mainPage/sponsor/SparebankstiftelsenDNB.png";
import Tekna from "/images/mainPage/sponsor/Tekna.png";
import UiB from "/images/mainPage/sponsor/UIB.png";
import VisionTech from "/images/mainPage/sponsor/VisionTech.png";
import NTNUIE from "/images/mainPage/sponsor/NTNUIE.png";
import NTNUIV from "/images/mainPage/sponsor/NTNUIV.png";
import Samarbeidsforum from "/images/mainPage/sponsor/SamarbeidsForum.png";
import Matematikksenteret from "/images/mainPage/sponsor/Matematikksenteret.png";

const hovedsponsor = [
  {
    name: "Abelprisen",
    image: Abelprisen,
  },
  {
    name: "Sparebankstiftelsen DNB",
    image: SparebankstiftelsenDNB,
  },  
]

const sponsorer = [
  {
    name: "Tekna",
    image: Tekna,
  },
  {
    name: "NTNU - Fakultet for ingeniørvitenskap",
    image: NTNUIV,
  },
  {
    name: "NTNU - Fakultet for informasjonsteknologi og elektronikk",
    image: NTNUIE,
  },
  {
    name: "Samarbeidsforum",
    image: Samarbeidsforum,
  },
  {
    name: "Universitetet i Bergen - Det matematisk-naturvitenskapelige fakultet",
    image: UiB,
  },
  {
    name: "Matematikksenteret",
    image: Matematikksenteret,
  },
  {
    name: "VisionTech",
    image: VisionTech,
  },
  {
    name: "Kulturstyret Bergen",
    image: KSBergen,
  },
]
interface MainPageProps {
  number: number;
  title: string;
  text: string;
  route: {
    pathname: string;
    text: string;
  };
}

const cards: MainPageProps[] = [
  {
    number: 2218,
    title: "Assistenter",
    text: "Over 2218 studenter har hatt et verv som vektorassistent i Vektorprogrammet",
    route: {
      pathname: "/assistenter",
      text: "Les mer om assistenter",
    },
  },
  {
    number: 608,
    title: "I team",
    text: "Over 608 studenter har hatt et verv i et av Vektorprogrammets mange team",
    route: {
      pathname: "/team",
      text: "Les mer om verv i team",
    },
  },
];

const mainPage = (): JSX.Element => {
  return (
    <main className="flex-grow">
      {/* Use component when the rendered component needs no props */}
      {/* Getting the routes from the defined route file in pages */}
      <div className="bg-vektor-index-blue md:h-[80vh] md:pt-14 md:flex">
        {/*Upper start*/}
        <div className="flex flex-col items-center w-full md:w-1/2 md:h-[26rem] lg:h-[31rem] xl:h-[35rem] md:p-8 text-center">
          <img
            className="md:hidden pt-12 pb-14 w-2/4"
            src={vektorLogo}
            alt="Vektorprogrammet"
          />
          <img
            className="p-5 pt-14 md:pt-0 mx-auto my-auto md:ml-auto md:mr-0 w-full md:w-auto h-full"
            src={vektorForsidebilde}
            alt="Vektorprogrammet bildet"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-10 md:mr-auto md:mt-24 md:text-left text-center">
          <h1 className="hidden md:block text-4xl font-bold mb-4 dark:text-text-dark">
            Vektorprogrammet
          </h1>
          <div className="mb-4 mt-6 flex md:block justify-center">
            <p className="text-md md:text-xl text-left md:w-4/5 dark:text-text-dark">
              - sender studenter til ungdomsskoler for å hjelpe til som
              lærerens assistent i matematikkundervisningen
            </p>
          </div>
          <button type="button" className="btn btn-success text-white">
            LES MER OG BLI ASSISTENT
          </button>
        </div>
      </div>
      {/*Upper end*/}
      <div className="info-background flex flex-wrap flex-row text-center max-w-full justify-center items-center gap-24 md:gap-40 pt-72 pb-72 md:mt-20 mb-0">
        {/*Middle start*/}
        {cards.map(({ number, title, text, route }) => (
          <div key={title} className="flex flex-col max-w-96 gap-5 text-vektor-bg">
            <div>
              <VisibilitySensor partialVisibility>
                {({ isVisible }: { isVisible: boolean }) => (
                  <div className="font-bold text-4xl">
                    {isVisible ? <CountUp end={number} duration={4} separator=""/> : 0}
                  </div>
                )}
              </VisibilitySensor>
              <p className="text-xl md:text-2xl">
                {title}
              </p>
            </div>
            <p className="text-sm max-w-80 md:text-xl md:max-w-96">
              {text}
            </p>
            <div>
              <Link className="btn btn-success text-white w-fit" to={route.pathname}>
                {route.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/*Middle end*/}
      <div className="flex flex-col justify-self-center max-w-4xl md:gap-32">
        <div className="flex flex-row flex-wrap justify-around md:justify-between">
          {hovedsponsor.map((sponsor) => (
            <div className="flex w-72 h-72 md:w-96 md:h-96 items-center">
              <img className="w-auto h-auto" 
                src={sponsor.image} 
                alt={sponsor.name} />
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-around md:justify-between">
          {sponsorer.map((sponsor) => (
            <div className="flex w-36 h-36 md:w-64 md:h-64 items-center">
              <img className="w-auto h-auto" 
                src={sponsor.image} 
                alt={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
};

export default mainPage;