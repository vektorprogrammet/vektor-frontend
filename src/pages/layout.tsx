import { NavLink, Outlet, useLocation } from "react-router";
import { useRef, useState } from "react";
import { navRoutes } from "~/routes";
import getSponsors, { type Sponsor } from "@/api/Sponsor";
import { FolderOpen, Mail, MapPin } from "lucide-react";
import { SiFacebook } from "@icons-pack/react-simple-icons";
import { Link } from "react-router";
import "./layout.css";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "~/components/ui/drawer";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
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

function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-2 z-50">
      <div className="hidden md:flex justify-center lg:px-4 w-full">
        <div className="flex bg-[#ccecf6] bg-opacity-40 rounded-full w-fit px-1.5 mr-12 gap-1 items-center shadow-md backdrop-blur dark:bg-black dark:bg-opacity-40">
          <div className="w-8 h-8">
            <div className="w-full rounded-full">
              <img
                src="/images/vektor-logo-circle.svg"
                alt="vektorprogrammet logo"
              />
            </div>
          </div>
          <NavTabs routes={navRoutes} />
        </div>
      </div>
      <div className="hidden md:flex w-fit absolute top-0 h-full right-2 items-center">
        <LoginButtons />
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

function NavTabs({
  routes,
}: {
  routes: Array<{ name: string; path: string }>;
}) {
  const location = useLocation();
  const navLinkRefs = useRef<HTMLElement[]>([]); // Refs to the nav links
  const [pillWidth, setPillWidth] = useState<number>();
  const [pillLeft, setPillLeft] = useState<number>();

  const activeNavIndex = routes.findIndex(
    (route) => `/${route.path}` === location.pathname,
  );

  return (
    <div className="flew-row relative mx-auto flex h-11 rounded-full px-0.5">
      <span
        className="absolute bottom-0 top-0 z-10 flex overflow-hidden rounded-full py-1.5 transition-all duration-300"
        style={{ left: pillLeft, width: pillWidth }}
      >
        <span className="h-full w-full rounded-full bg-vektor-blue shadow-sm" />
      </span>
      {routes.map((route, i) => {
        return (
          <NavLink
            to={route.path}
            key={route.path}
            ref={(el) => {
              if (!el) return;

              // Add the ref to the array
              navLinkRefs.current[i] = el;
              // If the current link is the active one, set the pill width and left offset
              if (i === activeNavIndex) {
                setPillWidth(el.offsetWidth);
                setPillLeft(el.offsetLeft);
              }
            }}
            className={({ isActive }) =>
              `${isActive ? "text-black" : "hover:text-black text-neutral-700 dark:text-vektor-blue dark:hover:text-vektor-bg"} z-20 text-sm my-auto cursor-pointer select-none rounded-full px-4 text-center font-medium`
            }
          >
            {route.name}
          </NavLink>
        );
      })}
    </div>
  );
}

function LoginButtons() {
  return (
    <div className="flex space-x-4">
      <Link reloadDocument to="/kontrollpanel">
        <button
          type="button"
          className="btn btn-success btn-sm text-white rounded-full h-10 w-32"
        >
          Logg inn
        </button>
      </Link>
    </div>
  );
}

interface Props {
  menuOpen: boolean;
  setMenuOpen: (values: boolean) => void;
}

const activeStyle: React.CSSProperties = {
  fontWeight: "600",
  background: "rgba(111,206,238,0.8)",
};

const MobileMenu = (props: Props) => {
  const { menuOpen, setMenuOpen } = props;

  const linkElements = navRoutes.map((route) => (
    <li key={route.name}>
      <Link
        className="text-lg dark:text-white"
        reloadDocument
        to={route.path ?? ""}
      >
        {route.name}
      </Link>
    </li>
  ));
  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger>
          <div className="flex fixed top-12 right-0 bg-[rgba(0,0,0,0.8)] p-1 pr-2 rounded-l-full">
            <div className="btn btn-md btn-ghost btn-circle avatar bg-vektor-bg">
              <div className="w-full rounded-full">
                <img src="/images/team/IT-Tor.png" alt="profile avatar" />
              </div>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader />
          <DrawerDescription>
            <div className="flex justify-between items-start p-6">
              <ul className="flex flex-col w-full items-start text-center gap-4">
                {linkElements}
              </ul>
              <div className="flex w-fit justify-center">
                <LoginButtons />
              </div>
            </div>
          </DrawerDescription>
          <DrawerFooter>
            <DrawerClose>
              <button type="button" className="btn btn-outline btn-error">
                Close
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

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
