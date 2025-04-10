import { type To, href } from "react-router";

interface Metric {
  number: number;
  title: string;
  description: string;
  link: {
    path: To;
    text: string;
  };
}

export function getMetrics(): Array<Metric> {
  return [
    {
      number: 2218,
      title: "Assistenter",
      description:
        "Over 2218 studenter har hatt et verv som vektorassistent i Vektorprogrammet",
      link: {
        path: href("/assistenter"),
        text: "Les mer om assistenter",
      },
    },
    {
      number: 608,
      title: "I team",
      description:
        "Over 608 studenter har hatt et verv i et av Vektorprogrammets mange team",
      link: {
        path: href("/team"),
        text: "Les mer om verv i team",
      },
    },
  ];
}
