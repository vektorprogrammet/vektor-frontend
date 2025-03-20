export interface Sponsor {
  name: string;
  url: URL;
}

// TODO: This data should be fetched from backend later
export function getSponsors(): Array<Sponsor> {
  return [
    { name: "Tekna", url: new URL("https://www.tekna.no/") },
    {
      name: "Nasjonalt senter for realfagsrekruttering",
      url: new URL("https://www.realfagsrekruttering.no/"),
    },
    { name: "NTNU IV", url: new URL("https://www.ntnu.no/iv") },
    { name: "NTNU IE", url: new URL("https://www.ntnu.no/ie") },
    { name: "NTNU IMF", url: new URL("https://www.ntnu.no/imf") },
    { name: "Samarbeidsforum", url: new URL("https://www.ntnu.no/nv/sf") },
    { name: "Abelprisen", url: new URL("https://www.abelprisen.no/") },
    { name: "VisionTech", url: new URL("https://www.visiontech.no/") },
    {
      name: "Kulturstyret i Bergen",
      url: new URL("https://www.vtvest.no/kulturstyret/"),
    },
    {
      name: "MN-faktultetet ved UiB",
      url: new URL("https://www.uib.no/matnat"),
    },
  ];
}
