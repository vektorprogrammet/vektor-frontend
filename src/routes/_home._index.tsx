import { buttonVariants } from "@/components/ui/button";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router";
import { getMetrics } from "~/api/main";
import { getMainSponsors, getSponsors } from "~/api/sponsor";
import { Button } from "~/components/ui/button";
import vektorForsidebilde from "/images/mainPage/vektor-forsidebilde.png";
import vektorLogo from "/images/vektor-logo.svg";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function MainPage() {
  const mainSponsors = getMainSponsors();
  const sponsors = getSponsors();
  const metrics = getMetrics();

  return (
    <main>
      <header className="grid grid-cols-1 place-items-center gap-14 bg-vektor-index-blue pt-14 md:grid-cols-2 md:flex-row">
        <img
          className="w-2/4 max-w-prose md:hidden"
          src={vektorLogo}
          width={381}
          height={221}
          alt={"Logo til Vektorprogrammet"}
        />
        <img
          className="size-full max-w-prose object-contain"
          src={vektorForsidebilde}
          width={801}
          height={765}
          alt="Illustrasjon av assistenter fra Vektorprogrammet foran en tavle med matteformler"
        />
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <h1 className="text-wrap font-bold text-4xl">{"Vektorprogrammet"}</h1>
          <p className="text-balance text-md">
            {`- sender studenter til ungdomsskoler for å hjelpe til som lærerens
              assistent i matematikkundervisningen`}
          </p>
          <Button variant="green" className="max-w-fit">
            {"Les mer og bli assistent"}
          </Button>
        </div>
      </header>

      {/*Upper end*/}
      <div className="info-background mb-0 flex max-w-full flex-row flex-wrap items-center justify-center gap-24 pt-72 pb-72 text-center md:mt-20 md:gap-40">
        {/*Middle start*/}
        {metrics.map(({ number, title, description, link }) => (
          <div
            key={title}
            className="flex max-w-96 flex-col gap-5 text-vektor-bg"
          >
            <div>
              <div className="font-bold text-4xl">
                <MotionCounter value={number} />
              </div>
              <p className="text-xl md:text-2xl">{title}</p>
            </div>
            <p className="max-w-80 text-sm md:max-w-96 md:text-xl">
              {description}
            </p>
            <div>
              <Link
                to={link.path}
                className={buttonVariants({ variant: "green" })}
                prefetch="intent"
              >
                {link.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/*Middle end*/}
      <div className="flex justify-center">
        <div className="flex max-w-4xl flex-col md:gap-32">
          <div className="flex flex-row flex-wrap justify-around md:justify-between">
            {mainSponsors.map(({ name, image }) => (
              <div
                className="flex h-72 w-72 items-center md:h-96 md:w-96"
                key={name}
              >
                <img className="h-auto w-auto" src={image} alt={name} />
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-around md:justify-between">
            {sponsors.map(({ name, image }) => (
              <Fragment key={name}>
                {image && (
                  <div
                    className="flex h-36 w-36 items-center md:h-64 md:w-64"
                    key={name}
                  >
                    <img className="h-auto w-auto" src={image} alt={name} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// * Inspired by https://github.com/driaug/animated-counter under the Unlicense
function MotionCounter({
  value,
  direction = "up",
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 80,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("nb-NO").format(
            Number(latest.toFixed(0)),
          );
        }
      }),
    [springValue],
  );

  return <span className={className} ref={ref} />;
}
