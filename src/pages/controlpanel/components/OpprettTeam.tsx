import react from "react";

const OpprettTeam = (): JSX.Element => {
  return (
    <div className="flex flex-col space-between w-full">
      <div className="flex justify-center font-bold mt-10 text-4xl">
        <h1>Opprett nytt team</h1>
      </div>
      <div className="ml-44 mt-10 flex text-2xl">
        <div className="flex flex-col gap-10">
          <label>Navn:</label>
          <label>Distrikt:</label>
          <label>E-post:</label>
          <label>Kort beskrivelse:</label>
          <label>Lang beskrivelse:</label>
        </div>
        <div className="ml-10 flex flex-col gap-6">
          <input type="text" placeholder="Teamnavn" className="input input-bordered input-info w-full max-w-xs" />
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn bg-vektor-blue m-1 ">Distrikt v</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
              <li><a>Trondheim</a></li>
              <li><a>Bergen</a></li>
              <li><a>Aas</a></li>
            </ul>
          </div>
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