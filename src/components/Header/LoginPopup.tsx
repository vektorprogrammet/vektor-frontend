import React, {
  Dispatch, MouseEventHandler, SetStateAction, useState,
} from "react";

const LoginPopup = ({ setVisible }: { setVisible: Dispatch<SetStateAction<boolean>> }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imgClassName, setimgClassName] = useState("flex flex-row mt-10 ml-4");

  const closeOrOpen: MouseEventHandler<HTMLDivElement> = (e) => {
    const isClose = (e.target as HTMLElement).closest("#popup");
    if (!isClose) {
      setVisible(false);
    }
  };

  function isValidEmail(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  const checkEmailAndPassword = () => {
    if (!isValidEmail()) {
      setErrorMessage("Email ugyldig, prøv igjen!");
    } else if (password.length < 6) {
      setErrorMessage("Passord ugyldig, prøv igjen!");
    } else {
      setErrorMessage("");
    }
  };

  // Logs in the mail and password set
  const logIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    checkEmailAndPassword();
    // do something to loginhere
    // .catch((error) => {
    //    showError(error);
    //     });
  };

  function handleEnterLogIn(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") {
      logIn(event); // calling the same function that is called when the "Log in" button is clicked
    }
  }

  return (
    <div
      className="bg-black/40 fixed top-0 left-0 w-full h-screen flex justify-center items-center"
      onClick={closeOrOpen}
      onKeyDown={() => {}}
      role="button"
      tabIndex={-1}
    >
      <div className="bg-white flex p-7.5 rounded-lg justify-around max-w-2xl h-96 border-2 " id="popup">
        <div className={imgClassName}>
          <img
            src="../images/TorPekerPåTekst1.png"
            className="tor h-52"
            alt="vektorbilde"
          />
          {errorMessage.length > 0
            ? (
              <div>
                <div className="error-bubble bg-white border border-gray-400 rounded-lg shadow-md p-4 max-w-xs mx-auto relative h-32 bottom-10 right-5">
                  <div className="text-gray-800">
                    <p className="text-red-500 font-semibold">{errorMessage}</p>
                  </div>
                  <div className="relative right-7 bottom-4 mb-3">
                    <div className="w-6 h-6 transform rotate-45 bg-white border-b border-l border-gray-400" />
                  </div>
                </div>
              </div>
            )
            : null }
        </div>

        <div className="mt-20 ml-5">
          <div>
            <p className="font-semibold">Brukernavn/E-post</p>
            <input
              className="input border-2 rounded-lg py-2 px-4 w-80 my-4"
              id="email"
              type="text"
              placeholder="E-post"
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              onFocus={() => setimgClassName("flex flex-row mt-10 ml-4 transform duration-300")}
              onKeyDown={handleEnterLogIn}
            />
          </div>
          <div>
            <p className="font-semibold">Passord</p>
            <input
              className="input border-2 rounded-lg py-2 px-4 w-80 mt-4 mb-2"
              id="password"
              type="password"
              placeholder="Passord"
              value={password}
              onChange={(e) => { setPassword(e.target.value); }}
              onFocus={() => setimgClassName("flex flex-row mt-36 ml-4 transform duration-300")}
              onKeyDown={handleEnterLogIn}
            />
            {/* <p className="text-red-500 font-semibold mb-2">{errorMessage}</p> */}
          </div>
          <div>
            <p className="mob-message hidden text-red-500 font-semibold">{errorMessage}</p>
            <button
              type="button"
              className="button btn btn-primary bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300 mr-24"
              onClick={(e) => logIn(e)}
            >
              Logg inn
            </button>
            <u className="text-blue-400 cursor-pointer">
              Glemt Passord?
            </u>
          </div>
        </div>
        <button className="btn btn-primary btn-square btn-outline relative text-2xl cursor-pointer mr-2 mt-2" onClick={() => setVisible(false)} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
