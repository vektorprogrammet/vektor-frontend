import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";

interface TabProps {
  divisions: DivisionList[];
  tabstate: number;
  setOpenTab: (number: number) => void;
}

interface DivisionList {
  name: string;
  number: number;
}

const Tabs = ({ divisions, tabstate, setOpenTab }: TabProps): JSX.Element => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.matchMedia("(max-width: 860px)").matches;
      setIsSmallScreen(isSmall);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild className="flex flex-row mb-4 relative">
          <button
            className="bg-vektor-darkblue text-white w-36 h-8 items-center cursor-default rounded-md flex justify-between px-2"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            <div className="flex items-center justify-between w-full">
              {divisions.find((data) => tabstate === data.number)?.name ||
                "Select Tab"}
              <FontAwesomeIcon
                icon={faAngleDown}
                className="ml-2 text-gray-600"
              />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white w-full rounded-md m-1 w-36 shadow-sm">
          {divisions.map((data) => {
            const chosenStyle =
              tabstate === data.number
                ? "font-semibold text-vektor-darkblue"
                : "hover:text-vektor-light-blue";
            return (
              <div key={data.number}>
                <DropdownMenuLabel
                  className={`cursor-pointer rouned-md px-2 py-1 w-full ${chosenStyle}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(data.number);
                    setIsOpen(false);
                  }}
                >
                  {data.name}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </div>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex flex-row md:flex-col">
      {divisions.map((data) => {
        const chosenStyle =
          tabstate === data.number
            ? "bg-vektor-darkblue text-white hover:bg-vektor-darkblue"
            : "bg-transparent hover:bg-vektor-light-blue dark:text-white";
        return (
          <div key={data.name}>
            <button
              type="button"
              className={`btn rounded-full btn-sm w-32 border-none shadow-none my-1 ${chosenStyle}`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(data.number);
              }}
            >
              {data.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
