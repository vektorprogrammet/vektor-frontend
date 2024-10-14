import Logo from '/images/vektor-logo-circle.svg';

const Divider = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center opacity-30">
      <img src={Logo} className="w-12 relative top-6 bg-vektor-bg dark:bg-vektor-bg-dark" alt="Vektorprogrammet logo"/>
      <div className="w-11/12 h-1 rounded-full bg-vektor-blue" />
    </div>
  );
}

export default Divider;