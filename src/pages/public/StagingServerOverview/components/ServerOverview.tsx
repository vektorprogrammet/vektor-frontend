import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { fetchServers, StagingServerAPIResponse } from "./FetchUtils";

import "../../../../App.css";

const ServerOverview = (): JSX.Element => {
  const [servers, setServers] = useState<[StagingServerAPIResponse]>();
  const [rows, setRows] = useState<Array<Boolean>>([]);

  useEffect(() => {
    async function getServers() {
      const data = await fetchServers();
      setServers(data);
      const l = new Array(data.length).fill(0);
      setRows(l);
    }
    getServers();
  }, []);

  const tableHeadClass = "px-5 py-3 border-gray-200 bg-gray-300 text-left text-m font-bold text-gray-600 uppercase tracking-wider";

  return (
    <div>
      <table className="justify-center m-auto my-20">
        <thead>
          <tr>
            <th
              className={tableHeadClass}
            >
              Repo
            </th>
            <th
              className={tableHeadClass}
            >
              Branch
            </th>
            <th
              className={tableHeadClass}
            >
              URL
            </th>
            <th
              className={tableHeadClass}
            >
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {servers?.map((server, index) => {
            return (
              <>
                <tr
                  key={server.branch}
                  onClick={() => {
                    /* Deep-copies the array which makes the component rerender
                    when using setRows */
                    const rowsCopy = JSON.parse(JSON.stringify(rows));
                    rowsCopy[index] = rowsCopy[index] === 0 ? 1 : 0;
                    setRows(rowsCopy);
                  }}
                  className={`cursor-pointer bg-gray-900 hover:bg-opacity-20 ${index % 2 === 1 ? "bg-opacity-10" : "bg-opacity-0"}`}
                >
                  <td className="p-5">{server.branch}</td>
                  <td className="p-5">{server.repo.substring(("https://github.com/vektorprogrammet/").length)}</td>
                  <td className="p-5">{server.url}</td>
                  <td className="p-5">
                    <a href={server.url} target="_blank" rel="noreferrer">
                      <button onClick={(e) => e.stopPropagation()} type="button" className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    {rows[index]
                      ? <iframe className="w-full h-96 border-b-2 border-r-2 border-l-2 border-blue-400" title="preview" src={server.url} frameBorder="1" />
                      : null}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ServerOverview;
