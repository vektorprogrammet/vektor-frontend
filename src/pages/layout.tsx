import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiFacebook } from "@icons-pack/react-simple-icons";
import { FolderOpen, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { Link, NavLink, Outlet, type To, useLocation } from "react-router";
import { type Sponsor, getSponsors } from "~/api/sponsor";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { navRoutes } from "~/routes";
import "./layout.css";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col items-stretch transition-colors">
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
      <div className="hidden w-full justify-center md:flex lg:px-4">
        <div className="mr-12 flex w-fit items-center gap-1 rounded-full bg-[#ccecf6] bg-opacity-40 px-1.5 shadow-md backdrop-blur dark:bg-black dark:bg-opacity-40">
          <div className="h-8 w-8">
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
      <div className="absolute top-0 right-2 hidden rounded-full md:flex">
        <LoginButtons />
      </div>
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        routes={navRoutes}
      />
    </div>
  );
}

function NavTabs({
  routes,
}: {
  routes: Array<{ name: string; path: To }>;
}) {
  const location = useLocation();
  const navLinkRefs = useRef<Array<HTMLElement>>([]); // Refs to the nav links
  const [pillWidth, setPillWidth] = useState<number>();
  const [pillLeft, setPillLeft] = useState<number>();

  const activeNavIndex = routes.findIndex(
    (route) => route.path === location.pathname,
  );

  return (
    <div className="flew-row relative mx-auto flex h-11 rounded-full px-0.5">
      <span
        className="absolute top-0 bottom-0 z-10 flex overflow-hidden rounded-full py-1.5 transition-all duration-300"
        style={{ left: pillLeft, width: pillWidth }}
      >
        <span className="h-full w-full rounded-full bg-vektor-blue shadow-sm" />
      </span>
      {routes.map((route, i) => {
        return (
          <NavLink
            to={route.path}
            key={route.path.toString()}
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
              `${isActive ? "text-black" : "text-neutral-700 hover:text-black dark:text-vektor-blue dark:hover:text-vektor-bg"} z-20 my-auto cursor-pointer select-none rounded-full px-4 text-center font-medium text-sm`
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
    <div className="flex space-x-4 overflow-clip rounded-full">
      <Link
        className={buttonVariants({ variant: "green" })}
        to={"/kontrollpanel"}
      >
        Logg inn
      </Link>
    </div>
  );
}

const _activeStyle: React.CSSProperties = {
  fontWeight: "600",
  background: "rgba(111,206,238,0.8)",
};

const MobileMenu = ({
  routes,
}: { routes: Array<{ name: string; path: To }> }) => {
  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger>
          <div className="fixed top-12 right-0 flex rounded-l-full bg-[rgba(0,0,0,0.8)] p-1 pr-2">
            <Button
              variant="outline"
              className="rounded-full bg-vektor-bg p-0"
              size="icon"
            >
              <Avatar className="h-full w-full rounded-full">
                <AvatarImage src="/images/team/IT-Tor.png" />
                <AvatarFallback>Tor</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader />
          <DrawerDescription>
            <div className="flex items-start justify-between p-6">
              <ul className="flex w-full flex-col items-start gap-4 text-center">
                {navRoutes.map((route) => (
                  <li key={route.name}>
                    <Link
                      className="text-lg dark:text-white"
                      reloadDocument
                      to={route.path}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex w-fit justify-center">
                <LoginButtons />
              </div>
            </div>
          </DrawerDescription>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
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
      <div className="mx-auto flex max-w-6xl flex-col place-items-center justify-between space-y-8 p-2 py-8 lg:flex-row lg:space-x-4 lg:space-y-0">
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
        <li className="flex place-items-center space-x-4">
          <SiFacebook size={40} />
          <ul className="flex place-items-center space-x-2">
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

        <li className="flex place-items-center space-x-4">
          <Mail size={40} />
          <div className="flex place-items-center space-x-2">
            <a
              className="hover:underline"
              href="mailto:hovedstyret@vektorprogrammet.no"
            >
              {"hovedstyret@vektorprogrammet.no"}
            </a>
          </div>
        </li>

        <li className="flex place-items-center space-x-4">
          <MapPin size={40} />
          <div className="flex place-items-center space-x-2">
            {"Høgskoleringen 5, 7491 Trondheim"}
          </div>
        </li>

        <li className="flex place-items-center space-x-4">
          <FolderOpen size={40} />
          <div className="flex place-items-center space-x-2">
            {"OrgNr: 998744814"}
          </div>
        </li>
      </ul>
    </div>
  );
}
