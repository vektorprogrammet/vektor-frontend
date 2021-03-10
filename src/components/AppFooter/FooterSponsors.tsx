import React from "react";
import getSponsors, { Sponsor } from "../../api/Sponsor";

const FooterSponsors = (): JSX.Element => {
  const sponsors: Array<Sponsor> = getSponsors();

  const sponsorItems: Array<JSX.Element> = sponsors.map((sponsor: Sponsor) => (
    <li key={sponsor.name}>
      <a style={{ color: "white" }} href={sponsor.url.href}>{sponsor.name}</a>
      {" "}
    </li>
  ));

  return (
    <ul>
      { sponsorItems }
    </ul>
  );
};

export default FooterSponsors;
