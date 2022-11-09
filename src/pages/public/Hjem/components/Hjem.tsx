import React from "react";

const Hjem = (): JSX.Element => {
  return (
    <div>
      <div className="bg-vektor-bg2 p-20 flex lg:flex-row lg:space-x-20 items-center justify-center h-screen md:-mt-28">
        <div className="flex flex-col flex-wrap space-y-8 md:space-y-10 items-center lg:items-start justify-center">
          <img
            className="w-48 md:hidden"
            alt="vektorprogrammet logo"
            src="images/vektor-logo.svg"
          />
          <img
            className="w-96 md:w-6/12 visible lg:hidden"
            alt="Assistants explaining equation on blackboard"
            src="images/blackboard.png"
          />
          <p className="text-vektor-darblue text-xl leading-normal max-w-sm tracking-wide text-center lg:text-start">
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>
          <div className="flex space-x-4 justify-start py-2">
            <button
              type="button"
              className="btn btn-secondary"
            >
              Bli medlem
            </button>
            <button
              type="button"
              className="btn btn-primary"
            >
              Les mer
            </button>
          </div>
        </div>

        <img
          className="w-1/2 rounded-br-[60px] rounded-tl-[60px] lg:block hidden" // sm:invisible
          alt="Vektor assistants"
          src="images/vektor2.png"
        />
      </div>
      <div className="bg-vektor-darblue flex flex-wrap items-center justify-center inline-block align-bottom w-full">
        <div className="justify-items-center text-center space-y-4 m-20">
          <div>
            <h1 className="text-white text-4xl tracking-wide">1910</h1>
            <h2 className="text-white text-xl tracking-wide">Assistenter</h2>
          </div>
          <h3 className="text-white text-xl max-w-md tracking-wide text-center">
            Over 1910 studenter har hatt et verv som vektorassistent i
            Vektorprogrammet.
          </h3>
        </div>
        <div className="m-20 justify-items-center text-center space-y-4">
          <div>
            <h1 className="text-white text-4xl tracking-wide">531</h1>
            <h2 className="text-white text-xl tracking-wide">I team</h2>
          </div>
          <h3 className="text-white text-xl max-w-md tracking-wide text-center">
            Over 531 studenter har hatt et verv i et av Vektorprogrammets mange
            team.
          </h3>
        </div>
      </div>
      <h1 className="flex justify-center pt-20 text-vektor-darblue m-10 text-4xl tracking-wide">
        Sponsorer
      </h1>
      <div className="grid auto-cols-auto md:grid-cols-2 xl:grid-cols-3  grid-flow-row gap-20 my-20 mx-10 justify-items-center align-center place-items-center md:mx-40 [&>*]:max-h-20 [&>*]:md:max-h-max [&>*]:aspect-auto">
        <img alt="Tekna logo" src="images/tekna.jpg" />
        <img alt="IE logo" src="images/IE.png" />
        <img className="h-16 md:h-auto" alt="IV logo" src="images/IV.png" />
        <img
          alt="Kulturstyret logo"
          src="images/kulturstyret.png"
        />
        <img
          alt="MatematikkSenteret logo"
          src="images/matematikkSenteret.png"
        />
        <img alt="Sf logo" src="images/sf.png" />
        <img
          className="md:col-span-2 max-w-2xl"
          alt="UIB logo"
          src="images/UIB.png"
        />
        <img
          className="md:col-span-2 xl:col-span-1"
          alt="VisionTech logo"
          src="images/VisionTech.png"
        />
      </div>
    </div>
  );
};

export default Hjem;
