import React from "react";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
  pictureOnLeft?: boolean;
}

const TextPictureCard = ({
  title,
  text,
  imgPath,
  alt,
  pictureOnLeft,
}: Props): JSX.Element => {
  const image = (
    <img
      src={imgPath.href}
      alt={alt}
      className="max-h-96 mt-6 rounded-lg mx-auto sm:w-auto md:max-w-md"
    />
  );

  return (
    <div className="flex w-full mx-auto justify-between flex-wrap mt-10">
      {pictureOnLeft && image}
      <div className="max-w-6xl m-auto">
        <h1 className="text-center mt-7 text-2xl dark:text-gray-200">{title}</h1>
        <p className="max-w-lg text-xl mt-3 px-3 dark:text-gray-300">{text}</p>
      </div>
      {!pictureOnLeft && image}
    </div>
  );
};

TextPictureCard.defaultProps = {
  pictureOnLeft: true,
};

export default TextPictureCard;
