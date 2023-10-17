import React from "react";

interface Props {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  imgPath: URL;
  alt: string;
}

const TeamCard = ({
  title,
  text1,
  text2,
  text3,
  alt,
  imgPath,
}: Props): JSX.Element => {
  return (

    <div className="flex w-full mx-auto justify-around flex-wrap">
      <div className="max-w-6xl mt-5 flex flex-col">
        <h1 className="text-gray-600 text-4xl font-bold mx-3 dark:text-gray-200">{title}</h1>
        <div className="max-w-md mt-4 mb-20 text-xl mx-3 dark:text-gray-300">
          <span className="mb-4">{text1}</span>
          {text2}
          <div className="mt-6">
            <strong>{text3}</strong>
          </div>
        </div>
      </div>
      <div className="mt-10 relative">
        <div className="w-full absolute top-20 overflow-visible">
          <svg className="overflow-visible">
            <polyline
              fill="none"
              strokeWidth="2"
              stroke="#2b69b0"
              points="-60,51 30,51 90,101"
            />
          </svg>
        </div>
        <img
          src={imgPath.href}
          alt={alt}
          className="w-auto max-w-full object-contain mx-auto max-h-80 mr-25"
        />
      </div>
    </div>
  );
};

export default TeamCard;
