import React from "react";

interface Props {
  title: string;
  text: string;
  imgPath: string;
}

const TextPictureCard = ({ title, text, imgPath }: Props): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>{text}</p>
      </div>
      <div>{imgPath}</div>
    </div>
  );
};

export default TextPictureCard;
