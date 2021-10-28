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
    <div className="float-container">
      <div className="w-1/2 float-left max-w-screen-sm mt-10 mb-0 ml-10 flex flex-col">
        <h1 className="max-w-2xl text-gray-600 text-4xl text-left font-bold mx-3">
          {title}
        </h1>
        <p className="max-w-2xl text-left mt-4 mb-5 text-xl mx-3">{text1}</p>
        <p className="max-w-2xl text-left text-xl mx-3">{text2}</p>
        <p className="max-w-2xl text-left mb-20 text-xl mx-3 font-bold">
          {text3}
        </p>
      </div>

      <svg>
        <polyline
          fill="none"
          strokeWidth="2"
          stroke="#2b69b0"
          //   class="city-polyline"
          points="0,0 50,50 150,50"
        />
      </svg>
      <img
        src={imgPath.href}
        className="float-right max-w-sm rounded-lg mx-auto w-2/5"
        alt={alt}
      />
    </div>
  );
};

export default TeamCard;
