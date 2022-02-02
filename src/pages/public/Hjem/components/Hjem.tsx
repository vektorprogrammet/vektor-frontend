import "../hjem.css";
const Hjem = (): JSX.Element => {
  return (
    <div>
      <div className="container">
        <div className="imageContainer">
          <img className="blackboardImg" src="images/blackboard.png" />
        </div>
        <div className="infoContainer">
          <h1>Vektorprogrammet</h1>
          <p>
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>
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
