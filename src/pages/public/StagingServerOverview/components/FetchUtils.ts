const serverUrl = "https://staging.vektorprogrammet.no/api/servers";
const diskUsageUrl = "https://staging.vektorprogrammet.no/api/disk-space";

export async function fetchServers(): Promise<[StagingServerAPIResponse]> {
  const response = await fetch(serverUrl);
  const body = await response.json();
  return body;
}

export async function fetchDiskUsage(): Promise<DiskUsageAPIResponse> {
  const response = await fetch(diskUsageUrl);
  const body = await response.json();
  return body;
}

export interface StagingServerAPIResponse {
  branch: string;
  domain: string;
  repo: string;
  url: string;
}

export interface DiskUsageAPIResponse {
  size: number;
  used: number;
}
