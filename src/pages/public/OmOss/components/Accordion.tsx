import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [symbol, setSymbol] = useState(faPlus);

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setSymbol(active ? faPlus : faMinus);
    // setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <div className="flex flex-col w-full items-center">
      <button
        className={`mt-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 dark:hover:bg-gray-500 box-border appearance-none cursor-pointer hover:bg-gray-200 focus:outline-none flex items-center justify-between w-full duration-200 ${active ? "bg-gray-300 dark:bg-gray-500" : "bg-gray-100 dark:bg-gray-600"}`}
        onClick={toggleAccordion}
        type="button"
      >
        <h2 className="md:text-xl sm:text-lg pl-6 text-left w-full dark:text-gray-300">{title}</h2>
        <FontAwesomeIcon className="mr-4" icon={symbol} size="lg" />
      </button>
      <div
        ref={contentSpace}
        style={{ height: `${height}` }}
        className="overflow-hidden duration-700 ease-in-out w-full"
      >
        <p className="p-3 pl-6 w-full md:text-xl sm:text-lg text-left mx-auto dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
