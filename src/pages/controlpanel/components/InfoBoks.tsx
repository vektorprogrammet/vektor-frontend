import React from 'react';

const InfoBoks = ({ info }: { info: string[] }) => {
  return (
    <div className="flex gap-14 bg-vektor-blue rounded-3xl justify-around h-20 shadow-md shadow-gray-500">
      {info.map((infoCell, index) => (
        <p key={index} className="flex items-center justify-center">
          {infoCell}
        </p>
      ))}
    </div>
  );
};

export default InfoBoks;
