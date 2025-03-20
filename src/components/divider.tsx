import Logo from "/images/vektor-logo-circle.svg";

export function Divider() {
  return (
    <div className="mt-5 mb-5 flex h-24 w-full flex-col items-center opacity-30 md:hidden lg:hidden">
      <img
        src={Logo}
        className="relative top-6 w-10 bg-vektor-bg dark:bg-vektor-bg-dark"
        alt="Vektorprogrammet logo"
      />
      <div className="h-1 w-10/12 rounded-full bg-vektor-blue" />
    </div>
  );
}
