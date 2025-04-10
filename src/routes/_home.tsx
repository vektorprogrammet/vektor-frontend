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
        "grid grid-cols-[10%_80%_10%] grid-rows-[auto_1fr_auto] place-items-center",
      )}
    >
      <NavBar className="col-span-full" />

      <Outlet />

      <Footer
        className={cn(
          // Dependent on parent layout
          "col-span-full",
          // Affects children
          "grid grid-cols-subgrid",
        )}
      />
    </div>
  );
}

function NavBar({ className }: { className?: string }) {
  const { width } = useViewportSize();
  const isMobile = width < breakpointPixels.md;

  return (
    <nav
      className={cn(
        "h-full w-full py-4",
        // Affects children and is layout dependent
        "grid grid-cols-subgrid place-items-center",
        className,
      )}
    >
      {isMobile ? (
        <MobileMenu
          routes={navRoutes}
          className="sticky top-4 col-start-3 col-end-4 items-end"
        />
      ) : (
        <>
          <div
            className={cn(
              "sticky top-2 w-fit gap-1 rounded-full bg-[#ccecf6]/40 px-1.5 shadow-md backdrop-blur",
              // Depends on parent layout
              "col-start-2 col-end-3",
              // Affects children
              "flex flex-row place-items-center",
            )}
          >
            <img
              src={icon}
              alt="vektorprogrammet logo"
              width={32}
              height={32}
            />
            <NavTabs routes={navRoutes} />
          </div>
          <div className="col-start-3 col-end-4">
            <LoginButtons />
          </div>
        </>
      )}
    </nav>
  );
}

function NavTabs({
  routes,
}: {
  routes: Array<{ name: string; path: To }>;
}) {
  return (
    <div className="flew-row flex h-11 rounded-full px-0.5">
      {routes.map((route) => {
        return (
          <NavLink
            to={route.path}
            key={route.path.toString()}
            className={({ isActive }) =>
              cn(
                isActive ? "text-black" : "text-neutral-700 hover:text-black",
                "my-1.5 px-4 font-medium text-sm",
                // Affects children
                "relative place-content-center text-nowrap text-center",
              )
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
  className,
}: { routes: Array<{ name: string; path: To }>; className?: string }) => {
  return (
    <Drawer>
      <DrawerTrigger className={cn(className)}>
        <div className={cn("flex rounded-l-full bg-black/80 p-1 pr-2")}>
          <Avatar
            className={cn(
              "h-full w-full bg-vektor-bg p-0",
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

function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-vektor-DARKblue", className)}>
      <div
        className={cn(
          "w-full p-4",
          // Dependent on parent layout
          "col-start-2 col-end-3",
          // Affects children
          "grid place-items-center gap-8 md:grid-cols-2 xl:grid-cols-3",
        )}
      >
        <img
          src={logoWhite}
          alt="vektorprogrammet logo hvit"
          width={274}
          height={160}
          className={cn(
            "h-40",
            // Dependent on parent layout
            "col-span-full xl:col-span-1",
          )}
        />
        <FooterLinks />
        <SponsorLinks />
      </div>
    </footer>
  );
}

function SponsorLinks() {
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
        <li className="flex place-items-center gap-4">
          <SiFacebook size={40} />
          <ul className="flex place-items-center gap-2">
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

        <li className="flex place-items-center gap-4">
          <Mail size={40} />
          <div className="flex place-items-center gap-2">
            <a
              className="hover:underline"
              href="mailto:hovedstyret@vektorprogrammet.no"
            >
              {"hovedstyret@vektorprogrammet.no"}
            </a>
          </div>
        </li>

        <li className="flex place-items-center gap-4">
          <MapPin size={40} />
          <div className="flex place-items-center gap-2">
            {"Høgskoleringen 5, 7491 Trondheim"}
          </div>
        </li>

        <li className="flex place-items-center gap-4">
          <FolderOpen size={40} />
          <div className="flex place-items-center gap-2">
            {"OrgNr: 998744814"}
          </div>
        </li>
      </ul>
    </div>
  );
}
