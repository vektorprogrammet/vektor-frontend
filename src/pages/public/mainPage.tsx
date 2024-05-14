import react from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from "react-router-dom";

import vektorForsidebilde from "/images/mainPage/vektor-forsidebilde.png";
import Abelprisen from "/images/mainPage/sponsor/Abelprisen.png";
import KSBergen from "/images/mainPage/sponsor/KSBergen.png";
import SparebankstiftelsenDNB from "/images/mainPage/sponsor/SparebankstiftelsenDNB.png";
import Tekna from "/images/mainPage/sponsor/Tekna.png";
import UiB from "/images/mainPage/sponsor/UIB.png";
import VisionTech from "/images/mainPage/sponsor/VisionTech.png";
import NTNUIE from "/images/mainPage/sponsor/NTNUIE.jpeg";
import NTNUIV from "/images/mainPage/sponsor/NTNUIV.jpeg";
import Samarbeidsforum from "/images/mainPage/sponsor/SamarbeidsForum.png";
import Matematikksenteret from "/images/mainPage/sponsor/Matematikksenteret.png";


interface MainPageProps {
  // Props
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
      <div className="bg-vektor-index-blue md:flex">
        {" "}
        {/*Upper start*/}
        <div className="w-full md:w-1/2 h-[29rem] md:h-[26rem] lg:h-[31rem] xl:h-[35rem] md:p-8 text-center">
          <h1 className="pt-20 md:p-0 font-bold text-4xl visible md:hidden mx-auto">
            Vektorprogrammet
          </h1>
          <img
            className="pt-10 md:pt-0 mx-auto my-auto md:ml-auto md:mr-0 h-full"
            src={vektorForsidebilde}
            alt="Vektorprogrammet"
          />
        </div>
        <div className="mt-16 w-full md:w-1/2 p-10 md:mr-auto md:mt-24 md:text-left text-center">
          <h1 className="hidden md:block text-4xl font-bold mb-4">
            Vektorprogrammet
          </h1>
          <div className="mt-10 flex md:block justify-center">
            <p className="text-xl text-left w-96">
              - sender studenter til ungdomsskoler for å hjelpe til som
              lærerens assistent i matematikkundervisningen
            </p>
          </div>
          <button type="button" className="bg-vektor-button-green text-white p-2 pl-4 pr-4 rounded-[3px] mt-4 text-[14px]">
            LES MER OG BLI ASSISTENT
          </button>
        </div>
      </div>
      {/*Upper end*/}
      <div className="info-background flex flex-row text-center w-full justify-center gap-40 pt-72 pb-72 mt-20 mb-20">
        {/*Middle start*/}
        {cards.map(({ number, title, text, route }) => (
          <div key={title} className="flex flex-col gap-5 text-accent">
            <div>
              <VisibilitySensor partialVisibility>
                {({ isVisible }: { isVisible: boolean }) => (
                  <div className="font-bold text-4xl">
                    {isVisible ? <CountUp end={number} duration={4} separator=""/> : 0}
                  </div>
                )}
              </VisibilitySensor>
              <p className="text-2xl">
                {title}
              </p>
            </div>
            <p className="text-lg max-w-96">
              {text}
            </p>
            <div>
              <Link className="btn btn-accent text-secondary w-fit" to={route.pathname}>
                {route.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/*Middle end*/}
      <div className="text-center mt-16 font-bold">
        <h1 className="text-4xl">Hovedsponsorer</h1>
      </div>
      <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28">
          <img className="h-full m-auto" 
            src={Abelprisen} 
            alt="Abelprisen" />
        </div>
        <div className="w-1/2 h-28">
          <img
            className="h-full m-auto"
            src={SparebankstiftelsenDNB}
            alt="Sparebankstiftelsen DNB"
          />
        </div>
      </div>
      <div className="text-center mt-16 font-bold">
        <h1 className="text-4xl">Sponsorer og samarbeidspartnere</h1>
      </div>
      <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28">
          <img className="h-full m-auto p-4" 
            src={Tekna} 
            alt="Tekna" />
        </div>
        <div className="w-1/2 h-28">
          <img
            className="h-full m-auto p-4"
            src={NTNUIV}
            alt="NTNU - Fakultet for ingeniørvitenskap"
          />
        </div>
      </div>
      <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28">
          <img
            className="h-full m-auto p-4"
            src={NTNUIE}
            alt="NTNU - Fakultet for informasjonsteknologi og elektronikk"
          />
        </div>
        <div className="w-1/2 h-28">
          <img
            className="h-full m-auto p-4"
            src={Samarbeidsforum}
            alt="Samarbeidsforum"
          />
        </div>
      </div>
      <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28">
          <img
            className="h-full m-auto p-4"
            src={UiB}
            alt="Universitetet i Bergen - Det matematisk-naturvitenskapelige fakultet"
          />
        </div>
        <div className="w-1/2 h-28">
          <img
            className="h-full m-auto p-4"
            src={Matematikksenteret}
            alt="Matematikksenteret"
          />
        </div>
      </div>
      <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28">
          <img 
            className="h-full m-auto p-4" 
            src={VisionTech} 
            alt="VisionTech" />
        </div>
        <div className="w-1/2 h-28">
          <img
            className="h-full m-auto p-4"
            src={KSBergen}
            alt="Kulturstyret Bergen"
          />
        </div>
      </div>
    </main>
  )
};

export default mainPage;