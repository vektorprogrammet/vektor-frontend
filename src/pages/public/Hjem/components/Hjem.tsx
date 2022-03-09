import "../hjem.css";

const Hjem = (): JSX.Element => {
  return (
    <div className="outerContainer">
      <img className="mainImg" src="images/Rectangle.png" />
      <div className="container">
        <div className="infoContainer">
          <h1>Vektorprogrammet</h1>
          <p>
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>

          <div className="btnContainer">
            <div className="assistantBtn">
              <a
                ///href="#"
                className=" px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dark-blue-vektor hover:bg-medium-blue-vektor md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>{" "}
            #Denne diven fucker ting opp litt
            <a
              ///href="#"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-dark-blue-vektor hover:bg-medium-blue-vektor md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="numbersContainer">
        <div className="statisticsContainer">
          <h1>1755</h1>
          <h2>Assistenter</h2>
          <h3>
            Over 1755 studenter har hatt et verv som vektorassistent i
            Vektorprogrammet.
          </h3>
        </div>
        <div className="statisticsContainer">
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
