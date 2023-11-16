import { ChangeEvent, useState } from "react";

const OpprettTeam = (): JSX.Element => {

  const [bold, setBold] = useState(false);

  const handleBoldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBold(event.target.checked);
  };

  return (
    <div className="flex flex-col items-center space-between w-full">
      <h1 className="text-2xl row-start-1 row-end-1 pt-10">Opprett team</h1>
      <div className="mt-32 flex text-2xl">
        <div className="flex flex-col gap-12 text-xl">
          <label>Navn:</label>
          <label>Distrikt:</label>
          <label>E-post:</label>
          <label>Kort beskrivelse:</label>
          <label>Lang beskrivelse:</label>
        </div>
        <div className="ml-10 flex flex-col gap-6">
          <input type="text" placeholder="Teamnavn" className="input input-bordered input-info w-96 max-w-xs" />
          <select className="select select-info w-full max-w-xs">
            <option disabled selected>Distrikt</option>
            <option>Trondheim</option>
            <option>Ås</option>
            <option>Bergen</option>
          </select>
          <input type="text" name="epost" placeholder="E-post" className="input input-bordered input-info w-full max-w-xs" />
          <input placeholder="Beskrivelse" className="input input-bordered input-info max-w-xs" />
          <input
        name="bold"
        type="checkbox"
        checked={bold}
        onChange={handleBoldChange}
      />
          <textarea placeholder="Beskrivelse" style={{ fontWeight: bold ? 'bold' : 'normal' }} className="textarea textarea-info"/>
          <button type="button" className="login-buttons bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300">
            Opprett team
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpprettTeam;