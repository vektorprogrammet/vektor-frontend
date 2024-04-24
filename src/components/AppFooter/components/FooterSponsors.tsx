import getSponsors, { Sponsor } from "../../../api/Sponsor";

const FooterSponsors = (): JSX.Element => {
  const sponsors: Array<Sponsor> = getSponsors();

  return (
    <ul className="text-white">
      <b>
        <li>Sponsorer og sammarbeidspartnere</li>
      </b>
      {sponsors.map((sponsor: Sponsor) => (
        <li key={sponsor.name}>
          <a className="text-sm hover:underline" href={sponsor.url.href}>
            {sponsor.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSponsors;
