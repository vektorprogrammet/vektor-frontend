import type { JSX } from "react";

import Logo from "/images/vektor-logo-circle.svg";

const Divider = (): JSX.Element => {
  return (
    <div className="w-full flex md:hidden lg:hidden flex-col items-center opacity-30 h-24 mt-5 mb-5">
      <img
        src={Logo}
        className="w-10 relative top-6 bg-vektor-bg dark:bg-vektor-bg-dark"
        alt="Vektorprogrammet logo"
      />
      <div className="w-10/12 h-1 rounded-full bg-vektor-blue" />
    </div>
  );
};

export default Divider;
