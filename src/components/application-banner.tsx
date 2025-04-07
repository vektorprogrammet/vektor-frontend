import { useState } from "react";

export default function ApplicationBanner() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  const message = "Søk Vektorprogrammet";
  const repeats = Array(6).fill(message);

  return (
    <main>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="relative flex items-center bg-[#46AF57] py-3 px-4 text-white backdrop-blur-md shadow-md overflow-hidden h-12 md:h-14">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl w-6 h-6 flex items-center justify-center cursor-pointer"
            aria-label="Close banner"
          >
            &times;
          </button>

          <div className="marquee-track flex items-center gap-8 text-sm font-semibold whitespace-nowrap">
            {repeats.map((text, index) => (
              <span key={index} className="mr-12 md:mr-72">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
