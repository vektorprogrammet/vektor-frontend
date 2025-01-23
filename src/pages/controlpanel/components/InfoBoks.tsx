import type { JSX } from "react";

interface InfoProps {
  info: string[];
}

const InfoBoks = ({ info }: InfoProps): JSX.Element => {
  return (
    <div className="flex gap-14 bg-vektor-blue rounded-2xl justify-around h-14 shadow-md shadow-gray-500 mx-8">
      {info.map((infoCell) => (
        <p key={infoCell} className="flex items-center justify-center">
          {infoCell}
        </p>
      ))}
    </div>
  );
};

export default InfoBoks;
