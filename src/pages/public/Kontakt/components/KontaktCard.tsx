import React from "react";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

const KontaktCard = ({
  title, text, alt, imgPath,
}: Props): JSX.Element => {
  return (
    <div className="float-container">
      <div className="w-2/5 float-left max-w-screen-sm mt-5 mb-0 -ml-20 flex flex-col">
        <h1 className="max-w-2xl text-gray-600 text-4xl text-left font-bold mx-3">
          {title}
        </h1>
        <p className="max-w-2xl text-left mt-4 mb-20 text-xl mx-3">{text}</p>
      </div>
      <img
        src={imgPath.href}
        className="float-right max-w-md rounded-lg mt-10 mr-45 w-2/5"
        alt={alt}
      />
    </div>
  );
};

export default KontaktCard;
