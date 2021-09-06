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

    <div className="flex w-full mx-auto justify-between flex-wrap">
      <div className="max-w-6xl">
        <img
          src={imgPath.href}
          alt={alt}
          className="h-24 mt-6 rounded-lg mx-auto"
        />
        <p className="font-sans text-xl text-center p-2">{title}</p>
        <p className="text-base text-center p-1">{text}</p>
      </div>

    </div>

  );
};

export default TextPictureCard;
