import React from "react";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

const TextPictureCard = ({
  title, text, imgPath, alt,
}: Props): JSX.Element => {
  return (
    <div className="flex w-full mx-auto justify-between flex-wrap mt-10">
      <div className="max-w-6xl  m-auto">
        <h1 className="text-center font-bold text-2xl">{title}</h1>
        <p className="max-w-lg text-xl mt-3 px-3">{text}</p>
      </div>
      <img
        src={imgPath.href}
        alt={alt}
        className="max-w-md mt-6 rounded-lg mx-auto mb-2"
      />
    </div>
  );
};

export default TextPictureCard;
