import { useState } from "react";

const OpprettTeam = (): JSX.Element => {

  const [distrikt, setDistrikt] = useState<string>("Velg distrikt");

  return (
    <div className="flex flex-col items-center space-between w-full">
      <h1 className="text-2xl row-start-1 row-end-1 pt-10">Opprett team</h1>
      <div className="mt-10 flex text-2xl">
        <div className="flex flex-col gap-10">
          <label>Navn:</label>
          <label>Distrikt:</label>
          <label>E-post:</label>
          <label>Kort beskrivelse:</label>
          <label>Lang beskrivelse:</label>
        </div>
        <div className="ml-10 flex flex-col gap-6">
          <input type="text" placeholder="Teamnavn" className="input input-bordered input-info w-full max-w-xs" />
          <button tabIndex={0} className="dropdown dropdown-end" type="button">
              <p className="bg-white rounded-full text-m shadow">{distrikt}</p>
            <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a onClick={() => setDistrikt("Trondheim")}>Trondheim</a>
              </li>
              <li>
                <a onClick={() => setDistrikt("Ås")}>Ås</a>
              </li>
              <li>
                <a onClick={() => setDistrikt("Bergen")}>Bergen</a>
              </li>
            </ul>
          </button>
          <input type="text" name="epost" placeholder="E-post" className="input input-bordered input-info w-full max-w-xs" />
          <input placeholder="Beskrivelse" className="input input-bordered input-info w-full max-w-xs" />
          <textarea placeholder="Beskrivelse" className="input input-bordered input-info w-full max-w-xs" />

          <button type="button" className="login-buttons bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300">
            Opprett team
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpprettTeam;