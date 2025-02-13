import { Outlet } from "react-router";
import AppHeader from "@/components/Header/AppHeader";
import getSponsors, { type Sponsor } from "@/api/Sponsor";
import { FolderOpen, Mail, MapPin } from "lucide-react";
import { SiFacebook } from "@icons-pack/react-simple-icons";

export default function Layout() {
  return (
    <div className="transition-colors flex flex-col items-stretch min-h-screen">
      <AppHeader />
      {/* Banner */}
      <Outlet />
      <AppFooter />
    </div>
  );
}

function AppFooter() {
  return (
    <footer className="bg-vektor-DARKblue">
      <div className="max-w-6xl mx-auto p-2 py-8 flex justify-between place-items-center flex-col space-y-8 lg:flex-row lg:space-x-4 lg:space-y-0">
        <img
          src="/images/vektor-logo-white.svg"
          alt="vektorprogrammet logo hvit"
          className="h-24 md:h-40"
        />
        <FooterLinks />
        <FooterSponsors />
      </div>
    </footer>
  );
}

function FooterSponsors() {
  const sponsors: Array<Sponsor> = getSponsors();

  return (
    <ul className="text-white">
      <b>
        <li>{"Sponsorer og sammarbeidspartnere"}</li>
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
}

function FooterLinks() {
  return (
    <div className="text-white">
      <ul className="grid grid-cols-1 gap-8">
        <li className="flex space-x-4 place-items-center">
          <SiFacebook size={40} />
          <ul className="flex space-x-2 place-items-center">
            <li>
              <a
                className="hover:underline"
                href="https://www.facebook.com/vektorprogrammet/"
              >
                {"Trondheim"}
              </a>
            </li>

            <li>
              <a
                className="hover:underline"
                href="https://www.facebook.com/vektorprogrammetNMBU/"
              >
                {"Ås"}
              </a>
            </li>

            <li>
              <a
                className="hover:underline"
                href="https://www.facebook.com/VektorprogrammetBergen/"
              >
                {"Bergen"}
              </a>
            </li>
          </ul>
        </li>

        <li className="flex space-x-4 place-items-center">
          <Mail size={40} />
          <div className="flex space-x-2 place-items-center">
            <a
              className="hover:underline"
              href="mailto:hovedstyret@vektorprogrammet.no"
            >
              {"hovedstyret@vektorprogrammet.no"}
            </a>
          </div>
        </li>

        <li className="flex space-x-4 place-items-center">
          <MapPin size={40} />
          <div className="flex space-x-2 place-items-center">
            {"Høgskoleringen 5, 7491 Trondheim"}
          </div>
        </li>

        <li className="flex space-x-4 place-items-center">
          <FolderOpen size={40} />
          <div className="flex space-x-2 place-items-center">
            {"OrgNr: 998744814"}
          </div>
        </li>
      </ul>
    </div>
  );
}
