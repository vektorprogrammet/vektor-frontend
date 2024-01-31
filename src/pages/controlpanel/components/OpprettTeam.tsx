import { useState } from "react";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const OpprettTeam = (): JSX.Element => {

  const [value, setValue] = useState('');

  var toolbarOptions = [
    [{ 'header': [1, 2, false] }],

    ['bold', 'italic', 'underline', 'image'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],

    [{ 'color': [] }, { 'background': [] }],

    ['clean']                       
  ];

  return (
    <div className="flex flex-col items-center space-between w-full">
      <h1 className="text-2xl row-start-1 row-end-1 pt-10">Opprett team</h1>
      <div className="mt-32 flex text-2xl w-2/3">
        <div className="flex flex-col gap-12 text-xl w-1/3">
          <label >Navn:</label>
          <label>Distrikt:</label>
          <label>E-post:</label>
          <label >Kort beskrivelse:</label>
          <label>Lang beskrivelse:</label>
        </div>
        <div className="flex flex-col gap-6">
          <input type="text" placeholder="Teamnavn" className="input input-bordered input-info w-96 max-w-xs" />
          <select className="select select-info w-full max-w-xs fit-content">
            <option>Trondheim</option>
            <option>Ås</option>
            <option>Bergen</option>
          </select>
          <input type="text" name="epost" placeholder="E-post" className="input input-bordered input-info w-full max-w-xs" />
          <input placeholder="Beskrivelse" className="input input-bordered input-info max-w-xs" />
          <div className="textarea textarea-info h-72 w-full">
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