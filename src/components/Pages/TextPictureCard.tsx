import React from "react";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
  pictureOnLeft?: boolean;
}

const TextPictureCard = ({
  title, text, imgPath, alt, pictureOnLeft = false
}: Props): JSX.Element => {

  const image = <img
        src={imgPath.href}
        alt={alt}
        className="max-w-md max-h-96 mt-6 rounded-lg mx-auto"
      />

  return (
    <div className="flex w-full mx-auto justify-between flex-wrap mt-10">
      {pictureOnLeft && image}
      <div className="max-w-6xl  m-auto">
        <h1 className="text-center text-2xl">{title}</h1>
        <p className="max-w-lg text-xl mt-3 px-3">{text}</p>
      </div>
      {!!!pictureOnLeft && image}
    </div>
  );
};

export default TextPictureCard;
