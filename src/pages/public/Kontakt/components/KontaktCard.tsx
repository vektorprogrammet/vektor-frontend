import React from "react";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

const KontaktCard = ({
  title, text, imgPath, alt,
}: Props): JSX.Element => {
  return (
    <div className="flex w-full mx-auto justify-around flex-wrap">
      <div className="max-w-6xl mt-5 flex flex-col">
        <h1 className=" text-gray-600 text-4xl font-bold mx-3 dark:text-gray-200">
          {title}
        </h1>
        <p className="max-w-md mt-4 mb-20 text-xl mx-3 dark:text-gray-300">{text}</p>
      </div>
      <img
        src={imgPath.href}
        alt={alt}
        className="max-w-md rounded-lg mt-10 mx-auto max-h-44 mr-30"
      />
    </div>
  );
};

export default KontaktCard;
