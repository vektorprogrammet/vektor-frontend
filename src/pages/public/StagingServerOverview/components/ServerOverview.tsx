import React, { useEffect, useState } from "react";
import { fetchServers, StagingServerAPIResponse } from "./FetchUtils";

const ServerOverview = (): JSX.Element => {
  const [servers, setServers] = useState<[StagingServerAPIResponse]>();

  useEffect(() => {
    async function getServers() {
      const data = await fetchServers();
      setServers(data);
    }
    getServers();
  }, []);

  console.log(servers);
  return (
    <div>
      <h1>Staging-servers</h1>
      <table className="w-10/12 justify-center m-auto">
        <thead>
          <tr>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Repo
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Branch
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              URL
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Visit
            </th>
          </tr>
        </thead>
        <tbody>
          {servers?.map((server) => {
            return (
              <tr>
                <td>{server.branch}</td>
                <td>{server.repo.substring(("https://github.com/vektorprogrammet/").length)}</td>
                <td>{server.url}</td>
                <td><a href={server.url}>Visit</a></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ServerOverview;
