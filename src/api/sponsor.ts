import Abelprisen from "/images/mainPage/sponsor/Abelprisen.png";
import ksBergen from "/images/mainPage/sponsor/KSBergen.png";
import Matematikksenteret from "/images/mainPage/sponsor/Matematikksenteret.png";
import NTNUIE from "/images/mainPage/sponsor/NTNUIE.png";
import NTNUIV from "/images/mainPage/sponsor/NTNUIV.png";
import Samarbeidsforum from "/images/mainPage/sponsor/SamarbeidsForum.png";
import sparebankstiftelsenDnb from "/images/mainPage/sponsor/SparebankstiftelsenDNB.png";
import Tekna from "/images/mainPage/sponsor/Tekna.png";
import UiB from "/images/mainPage/sponsor/UIB.png";
import VisionTech from "/images/mainPage/sponsor/VisionTech.png";

export interface Sponsor {
  name: string;
  url: URL;
  image?: string;
}

export function getMainSponsors(): Array<Sponsor> {
  return [
    {
      name: "Abelprisen",
      url: new URL("https://www.abelprisen.no/"),
      image: Abelprisen,
    },
    {
      name: "Sparebankstiftelsen DNB",
      url: new URL("https://www.sparebankstiftelsendnb.no/"),
      image: sparebankstiftelsenDnb,
    },
  ];
}

export function getSponsors(): Array<Sponsor> {
  return [
    { name: "Tekna", url: new URL("https://www.tekna.no/"), image: Tekna },
    {
      name: "Nasjonalt senter for realfagsrekruttering",
      url: new URL("https://www.realfagsrekruttering.no/"),
      image: Matematikksenteret,
    },
    { name: "NTNU IV", url: new URL("https://www.ntnu.no/iv"), image: NTNUIV },
    { name: "NTNU IE", url: new URL("https://www.ntnu.no/ie"), image: NTNUIE },
    { name: "NTNU IMF", url: new URL("https://www.ntnu.no/imf") },
    {
      name: "Samarbeidsforum",
      url: new URL("https://www.ntnu.no/nv/sf"),
      image: Samarbeidsforum,
    },
    {
      name: "VisionTech",
      url: new URL("https://www.visiontech.no/"),
      image: VisionTech,
    },
    {
      name: "Kulturstyret i Bergen",
      url: new URL("https://www.vtvest.no/kulturstyret/"),
      image: ksBergen,
    },
    {
      name: "MN-faktultetet ved UiB",
      url: new URL("https://www.uib.no/matnat"),
      image: UiB,
    },
  ];
}

// TODO: This data should be fetched from backend later
export function getAllSponsors(): Array<Sponsor> {
  return [...getMainSponsors(), ...getSponsors()];
}
