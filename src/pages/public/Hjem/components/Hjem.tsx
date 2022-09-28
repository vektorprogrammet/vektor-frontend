import { Link } from "react-router-dom";
import "../hjem.css";

const Hjem = (): JSX.Element => {
  return (
    <div className="w-full">
      <img className="pt-600 w-full" src="images/Rectangle.png" />
      <div className="absolute w-full">
        <div className="absolute flex-column w-full pl-20 py-80 bottom-0 inset-x-0 text-vektor-darblue text-xs text-left leading-4 align-text-top ">
          <h1 className="vektor-darblue text-4xl ">Vektorprogrammet</h1>
          <p className="text-xl max-w-sm leading-6 tracking-wide pb-10">
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>
          <div className="flex flex-row space-x-2 ">
            <div className="flex space-x-4 w-1/5 justify-start">
              <button
                type="button"
                className="px-8 py-3 bg-vektor-darblue text-base font-medium hover:bg-blue-400 text-white px-6 rounded-full"
              >
                Les mer og bli assistent
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-20 pt-10 grid grid-cols-2 gap-2">
        <div>
          <h1>1755</h1>
          <h2>Assistenter</h2>
          <h3>
            Over 1755 studenter har hatt et verv som vektorassistent i
            Vektorprogrammet.
          </h3>
        </div>
        <div>
          <h1>292</h1>
          <h2>Assistenter</h2>
          <h3>
            sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </h3>
        </div>
        <h2>test</h2>
        <div className="flex flex-row pt-20 place-content-left">
          <img className="blackboardImg" src="images/blackboard.png" />
        </div>
      </div>
      <h1 className="flex justify-center pt-20">Sponsorer</h1>
      <div className="pt-10 grid grid-cols-3 gap-4">
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
