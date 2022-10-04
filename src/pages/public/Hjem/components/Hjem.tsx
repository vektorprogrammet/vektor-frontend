import { Link } from "react-router-dom";

const Hjem = (): JSX.Element => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 m-20 place-content-end">
        <div className="grid grid-rows-3 place-content-center m-20">
          <h1 className="text-vektor-darblue text-5xl tracking-wide">
            Vektorprogrammet
          </h1>
          <p className="text-vektor-darblue text-xl leading-normal max-w-sm tracking-wide text-start">
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>
          <div className="w-30 h-30 jplace-content-center">
            <button
              type="button"
              className="bg-vektor-darblue font-medium hover:bg-blue-400 text-white rounded-full"
            >
              Bli assistent
            </button>
          </div>
        </div>
        <img className="w-full rounded-tl-[60px]" src="images/teaching.png" />
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
