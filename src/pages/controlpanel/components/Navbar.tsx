import React from "react";

interface Props {
  select: Array<string>;
  selected: string;
  setSelected: (item: string) => void;
}

const Navbar:React.FC<Props> = ({ select, selected, setSelected }) => {
  return (
    <>
      {select.map((item: string) => (
        <button
          key={item}
          className={`row-start-2 col-start-1 pr-2 pl-2 pt-8 pb-2 ${selected === item ? "border-vektor-blue-hover border-b-4 pb-1" : ""}`}
          onClick={() => setSelected(item)}
          type="button"
        >
          { item }
        </button>
      ))}
    </>
  );
};

export default Navbar;
