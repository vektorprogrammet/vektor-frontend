import React from "react";

interface Props {
  title: string;
  text: string;
}

const PageParagraph = ({ title, text }: Props): JSX.Element => {
  return (
    <div>
      <h1 className="text-left px-3 text-4xl font-bold">{title}</h1>
      <p className="max-w-lg text-xl mt-3 px-3">{text}</p>
    </div>
  );
};
