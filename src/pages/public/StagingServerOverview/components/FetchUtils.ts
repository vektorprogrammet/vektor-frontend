const serverURL = "https://staging.vektorprogrammet.no/api/servers";
const diskUsageURL = "https://staging.vektorprogrammet.no/api/disk-space";

export async function fetchServers(): Promise<any> {
  const response = await fetch(serverURL);
  const body = await response.json();
  return body;
}

export async function fetchDiskUsage(): Promise<any> {
  const response = await fetch(diskUsageURL);
  const body = await response.json();
  return body;
}

export interface StagingServerAPIResponse{
  branch: string,
  domain: string,
  repo: string,
  url: string
}
