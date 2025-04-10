import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiFacebook } from "@icons-pack/react-simple-icons";
import { useViewportSize } from "@mantine/hooks";
import { FolderOpen, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Link, NavLink, Outlet, type To } from "react-router";
import { type Sponsor, getAllSponsors } from "~/api/sponsor";
import { buttonVariants } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import "~/home.css";
import { breakpointPixels, cn } from "~/lib/utils";
import { navRoutes } from "~/routes";
import itTor from "/images/team/IT-Tor.png";
import icon from "/images/vektor-logo-circle.svg";
import logoWhite from "/images/vektor-logo-white.svg";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Layout() {
  return (
    <div
      className={cn(
        "min-h-screen w-full transition-colors",
        // Affects children
        "grid grid-cols-[10%_80%_10%] grid-rows-[auto_1fr_auto]",
      )}
    >
      <AppHeader className="col-span-full" />

      <Outlet />

      <AppFooter
        className={cn(
          // Dependent on parent layout
          "col-span-full",
        )}
      />
    </div>
  );
}

function AppHeader() {
  const { width } = useViewportSize();
  const isMobile = width < breakpointPixels.md;

  return (
    <div className="sticky top-2 z-50">
      {isMobile ? (
        <MobileMenu routes={navRoutes} />
      ) : (
        <>
          <div className="flex w-full flex-wrap justify-center lg:px-4">
            <div className="mr-12 flex w-fit items-center gap-1 rounded-full bg-[#ccecf6] bg-opacity-40 px-1.5 shadow-md backdrop-blur dark:bg-black dark:bg-opacity-40">
              <img
                src={icon}
                alt="vektorprogrammet logo"
                width={32}
                height={32}
              />
              <NavTabs routes={navRoutes} />
            </div>
          </div>
          <div className="absolute top-0 right-2 flex rounded-full">
            <LoginButtons />
          </div>
        </>
      )}
    </div>
  );
}

function NavTabs({
  routes,
}: {
  routes: Array<{ name: string; path: To }>;
}) {
  return (
    <div className="flew-row relative mx-auto flex h-11 rounded-full px-0.5">
      {routes.map((route) => {
        return (
          <NavLink
            to={route.path}
            key={route.path.toString()}
            className={({ isActive }) =>
              `${isActive ? "text-black" : "text-neutral-700 hover:text-black"} relative my-1.5 place-content-center px-4 py-auto text-center font-medium text-sm`
            }
            prefetch="intent"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="active"
                    className="absolute inset-0 rounded-full bg-vektor-blue mix-blend-multiply shadow-sm"
                    transition={{
                      type: "spring",
                      bounce: 0.1,
                      duration: 0.6,
                    }}
                  />
                )}
                {route.name}
              </>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}

function LoginButtons() {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: "green",
        }),
        "rounded-full",
      )}
      to={"/kontrollpanel"}
      prefetch="intent"
    >
      {"Logg inn"}
    </Link>
  );
}

const MobileMenu = ({
  routes,
}: { routes: Array<{ name: string; path: To }> }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="fixed top-12 right-0 flex rounded-l-full bg-black/80 p-1 pr-2">
          <Avatar
            className={cn(
              "h-full w-full rounded-full bg-vektor-bg p-0",
              buttonVariants({
                variant: "outline",
                size: "icon",
                className: "rounded-full",
              }),
            )}
          >
            <AvatarImage src={itTor} />
            <AvatarFallback>{"Tor"}</AvatarFallback>
          </Avatar>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{"Navigasjonsmeny"}</DrawerTitle>
          <DrawerDescription hidden={true}>
            {"Meny for å navigere til hovedsider på nettsiden"}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex items-start justify-between p-6">
          <ul className="flex w-full flex-col items-start gap-4 text-center">
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  className="text-lg dark:text-white"
                  reloadDocument
                  to={route.path}
                  prefetch="render"
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

        <DrawerFooter>
          <DrawerClose className={buttonVariants({ variant: "outline" })}>
            {"Close"}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

function AppFooter() {
  return (
    <footer className="bg-vektor-DARKblue">
      <div className="mx-auto flex max-w-6xl flex-col place-items-center justify-between space-y-8 p-2 py-8 lg:flex-row lg:space-x-4 lg:space-y-0">
        <img
          src={logoWhite}
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
  const sponsors = getAllSponsors();

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
