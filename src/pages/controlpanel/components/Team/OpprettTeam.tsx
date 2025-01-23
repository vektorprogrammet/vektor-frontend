import { useState, type JSX } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const OpprettTeam = (): JSX.Element => {
  const [value, setValue] = useState("");

  const toolbarOptions = [
    [{ header: [1, 2, false] }],
    [{ size: ["small", "large"] }],

    ["bold", "italic", "underline", "image"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
  ];

  return (
    <div className="flex flex-col items-center space-between w-full ml-24 mr-2">
      <h1 className="text-2xl row-start-1 row-end-1 pt-6">Opprett team</h1>
      <div className="mt-12 flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex flex-col">
            <p className="label">Teamnavn</p>
            <input
              type="text"
              className="input input-bordered input-info w-72 min-w-72 min-h-12"
              id="teamnavn"
            />
            <p className="label">Email</p>
            <p className="input input-bordered input-info flex items-center gap-2 w-72 min-h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" id="email" />
            </p>
          </div>
          <div className="flex flex-col">
            <p className="label">Region</p>
            <select
              className="select select-info w-72 max-w-72 fit-content"
              id="region"
            >
              <option>Trondheim</option>
              <option>Ås</option>
              <option>Bergen</option>
            </select>
            <p className="label">Beskrivelse</p>
            <input
              className="input input-bordered input-info w-72 min-h-12"
              id="beskrivelse"
            />
          </div>
        </div>
        <p className="label mt-8">Lang beskrivelse</p>
        <div
          className="textarea textarea-info h-72 w-full max-w-xl"
          id="lang-beskrivelse"
        >
          <ReactQuill
            theme="snow"
            value={value}
            modules={{
              toolbar: toolbarOptions,
            }}
            onChange={setValue}
            className="h-48"
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            type="button"
            className="login-buttons bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 mt-12 rounded-full duration-300 "
          >
            Opprett team
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpprettTeam;
