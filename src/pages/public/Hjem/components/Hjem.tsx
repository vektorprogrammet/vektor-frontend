import { Link } from "react-router-dom";

const Hjem = (): JSX.Element => {
  return (
    <div>
      <div className="bg-vektor-bg2 mx-1/4 py-40 flex flex-row  flex-wrap space-x-20 items-center justify-center  ">
        <div className="space-y-10">
          <img className="w-64" src="images/vektor-logo.svg" />
          {/*        <h1 className="text-vektor-darblue text-5xl tracking-wide">
            Vektorprogrammet
          </h1> */}
          <p className="text-vektor-darblue text-xl leading-normal max-w-sm tracking-wide text-start  ">
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>
          <div className="flex space-x-4 justify-start">
            <button
              type="button"
              className="bg-vektor-darblue hover:bg-vektor-blue-hover px-6 py-2 w-1/3 text-white rounded-full"
            >
              Bli medlem
            </button>
            <button
              type="button"
              className="bg-vektor-blue hover:bg-vektor-blue-hover px-6 py-2 w-1/3 text-white rounded-full"
            >
              Les mer
            </button>
          </div>
        </div>
        <img
          className="w-1/2 rounded-br-[60px] rounded-tl-[60px]"
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
        {/* <div className="flex flex-row pt-20 place-content-left">
          <img className="blackboardImg" src="images/blackboard.png" />
        </div> */}
      </div>
      <h1 className="flex justify-center pt-20 text-vektor-darblue m-10 text-4xl tracking-wide">
        Sponsorer
      </h1>
      <div className="flex flex-column flex-wrap lg:mx-40 m-20 items-center justify-center  place-items-start space-y-20 space-x-20">
        <img className="teknaImg" src="images/tekna.jpg" />
        <img className="sponsorImg" src="images/ntnu1.png" />
        <img className="sponsorImg" src="images/ntnu2.png" />
        <img className="teknaImg" src="images/tekna.jpg" />
        <img className="sponsorImg" src="images/ntnu1.png" />
        <img className="sponsorImg" src="images/ntnu2.png" />
      </div>
    </div>
  );
};

export default Hjem;
