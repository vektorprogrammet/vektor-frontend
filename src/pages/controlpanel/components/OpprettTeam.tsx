import { useState } from "react";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const OpprettTeam = (): JSX.Element => {

  const [value, setValue] = useState('');

  var toolbarOptions = [
    [{ 'header': [1, 2, false] }],
    [{ 'size': [ 'small', 'large'] }],

    ['bold', 'italic', 'underline', 'image'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],                      
  ];

  return (
    <div className="flex flex-col items-center space-between w-full ml-24 mr-2">
      <h1 className="text-2xl row-start-1 row-end-1 pt-6">Opprett team</h1>
      <div className="mt-12 flex text-xl">
        <div className="flex flex-col gap-6 items-center">
          <input type="text" placeholder="Teamnavn" className="input input-bordered input-info w-72 max-w-72" />
          <select className="select select-info w-72 max-w-72 fit-content">
            <option>Trondheim</option>
            <option>Ås</option>
            <option>Bergen</option>
          </select>
          <input type="text" name="epost" placeholder="E-post" className="input input-bordered input-info w-72 max-w-72" />
          <input placeholder="Beskrivelse" className="input input-bordered input-info w-72 max-w-72" />
          <label>Lang beskrivelse:</label>
          <div className="textarea textarea-info h-72 w-full max-w-xl">
            <ReactQuill
              theme="snow"
              value={value}
              modules={{
                toolbar: toolbarOptions
              }}
              onChange={setValue}
              className="h-48"
            />
          </div>
          <button type="button" className="login-buttons bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300">
            Opprett team
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpprettTeam;