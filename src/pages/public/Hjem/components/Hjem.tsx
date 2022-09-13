import "../hjem.css";

const Hjem = (): JSX.Element => {
  return (
    <div className="w-full">
      <img className="pt-600 w-full" src="images/Rectangle.png" />
      <div className="absolute w-full">
        <div className="absolute flex-column w-full pb-180 pl-5 py-20 bottom-0 inset-x-0 text-black text-xs text-left leading-4 align-text-top ">
          <h1 className="text-dark-blue-vektor text-4xl ">Vektorprogrammet</h1>
          <p className="text-2xl tracking-wide pb-10">
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>
          <div className="flex flex-row space-x-2">
            <div className="flex">
              <a
                ///href="#"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dark-blue-vektor hover:bg-medium-blue-vektor md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <a
              ///href="#"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dark-blue-vektor hover:bg-medium-blue-vektor md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-ro justify-center">
        <div className="">
          <h1>1755</h1>
          <h2>Assistenter</h2>
          <h3>
            Over 1755 studenter har hatt et verv som vektorassistent i
            Vektorprogrammet.
          </h3>
        </div>
        <div className="">
          <h1>292</h1>
          <h2>Assistenter</h2>
          <h3>
            Over 1755 studenter har hatt et verv som vektorassistent i
            Vektorprogrammet.
          </h3>
        </div>
      </div>
      <div className="sponsors">
        <img className="teknaImg" src="images/tekna.jpg" />
        <img className="sponsorImg" src="images/ntnu1.png" />
        <img className="sponsorImg" src="images/ntnu2.png" />
      </div>
    </div>
  );
};

export default Hjem;
