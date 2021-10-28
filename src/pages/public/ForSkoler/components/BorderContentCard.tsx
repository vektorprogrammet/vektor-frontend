import React from "react";

interface Props {
  title?: string;
  text?: Array<string>;
  children?: React.ReactNode;
}

const BorderContentCard = ({ title, text, children }: Props): JSX.Element => {
  return (
    <div className="text-center rounded border my-20 mx-auto p-6">
      <div>
        <h1 className="px-3 text-gray-600 text-2xl text-center font-bold mx-auto my-3">
          {title}
        </h1>
        {text?.map((textParagraph) => {
          return (
            <p key={textParagraph} className="text-xl mb-3 px-3 mx-auto">
              {textParagraph}
            </p>
          );
        })}
      </div>
      {children}
    </div>
  );
};

BorderContentCard.defaultProps = {
  title: undefined,
  text: undefined,
  children: undefined,
};

export default BorderContentCard;
