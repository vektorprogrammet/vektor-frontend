import "../hjem.css";
const Hjem = (): JSX.Element => {
  return (
    <div className="outerContainer">
      <div className="container">
        <div className="imageContainer">
          <img className="blackboardImg" src="images/blackboard.png" />;
        </div>
        <div className="infoContainer">
          <h1>Vektorprogrammet</h1>
          <p>
            - sender studenter til ungdomsskoler for å hjelpe til som lærerens
            assistent i matematikkundervisningen
          </p>
        </div>
      </div>
      <p>
        <h2>292</h2>
      </p>
    </div>
  );
};

export default Hjem;
