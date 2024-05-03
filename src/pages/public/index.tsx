import AppFooter from "components/AppFooter/AppFooter";
import AppHeader from "components/Header/AppHeader";
import { Outlet, ScrollRestoration } from "react-router-dom";

import img from "/images/mainpage/vektor-forsidebilde.png";
import hoved1 from "/images/mainpage/hoved1.png";
import hoved2 from "/images/mainpage/hoved2.png";
import normal1 from "/images/mainpage/normal1.png";
import normal2 from "/images/mainpage/normal2.jpeg";
import normal3 from "/images/mainpage/normal3.jpeg";
import normal4 from "/images/mainpage/normal4.png";
import normal5 from "/images/mainpage/normal5.png";
import normal6 from "/images/mainpage/normal6.png";
import normal7 from "/images/mainpage/normal7.png";
import normal8 from "/images/mainpage/normal8.png";


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

const MainPage = (): JSX.Element => {
  return (
    <div className="App flex flex-col items-stretch min-h-screen">
      <AppHeader />
      <ScrollRestoration />
      {/* Banner */}
      <main className="flex-grow">
        {/* Use component when the rendered component needs no props */}
        {/* Getting the routes from the defined route file in pages */}
        <Outlet />

          <div className="bg-vektor-index-blue md:flex">  {/*Upper start*/}
            <div className="w-full md:w-1/2 h-[29rem] md:h-[26rem] lg:h-[31rem] xl:h-[35rem] md:p-8 text-center">
              <h1 className="pt-20 md:p-0 font-bold text-4xl visible md:hidden mx-auto">Vektorprogrammet</h1>
              <img className="pt-10 md:pt-0 mx-auto my-auto md:ml-auto md:mr-0 h-full" src={img} alt="Vektorprogrammet" />
            </div>
            <div className="mt-16 w-full md:w-1/2 p-10 md:mr-auto md:mt-24 md:text-left text-center">
                <h1 className="hidden md:block text-4xl font-bold mb-4">Vektorprogrammet</h1>
                <div className="mt-10 flex md:block justify-center">
                  <p className="text-xl text-left w-96">- sender studenter til ungdomsskoler for å hjelpe til som lærerens assistent i matematikkundervisningen</p>
                </div>
                <button type="button" className=" bg-vektor-button-green text-white p-2 pl-4 pr-4 rounded-[3px] mt-4 text-[14px]">LES MER OG BLI ASSISTENT</button>
            </div>
          </div> {/*Upper end*/}

          <div className="md:flex text-center w-full"> {/*Middle start*/}
              {cards.map(({
                number, title, text, route,
              }) => (
                <div key={title} className="w-full md:w-1/2 mt-20">
                  <p className="text-2xl">
                    <span className="font-bold text-4xl">{number}</span>
                    <br />
                    {title}
                  </p>
                  <p className="text-left text-lg mt-4 w-96 mx-auto">
                    {text}
                    <br className="mb-3"/>
                    <Link to={route.pathname}><p className="underline text-blue-600 hover:text-blue-800">{route.text}</p></Link>
                  </p>
                </div>
              ))}
          <hr />
          </div> {/*Middle end*/}

          <hr className="w-3/4 mt-12 mx-auto"/>

        <div className="text-center mt-16 font-bold">
          <h1 className="text-4xl">Hovedsponsorer</h1>
        </div>

        <div className="flex mx-96 mt-12">
          <div className="w-1/2 h-28"><img className="h-full m-auto " src={hoved1} alt="Abelprisen"/></div>
          <div className="w-1/2 h-28"><img className="h-full m-auto" src={hoved2} alt="Sparebankstiftelsen DNB"/></div>
        </div>

        <div className="text-center mt-16 font-bold">
          <h1 className="text-4xl">Sponsorer og samarbeidspartnere</h1>
        </div>

        <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal1} alt="Tekna"/></div>
          <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal2} alt="NTNU - Fakultet for ingeniørvitenskap"/></div>
        </div>

        <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal3} alt="NTNU - Fakultet for informasjonsteknologi og elektronikk"/></div>
          <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal4} alt="Samarbeidsforum"/></div>
        </div>

        <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal5} alt="Universitetet i Bergen - Det matematisk-naturvitenskapelige fakultet"/></div>
          <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal6} alt="Matematikksenteret"/></div>
        </div>

        <div className="flex mx-96 mt-12">
        <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal7} alt="VisionTech"/></div>
          <div className="w-1/2 h-28"><img className="h-full m-auto p-4" src={normal8} alt="Kulturstyret Bergen"/></div>
        </div>
        
      </main>
      <AppFooter />
    </div>
  );
};
export default MainPage;