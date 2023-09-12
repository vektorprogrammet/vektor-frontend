import React from "react";

interface Props {
  title: string;
  text: Array<string>;
  children?: JSX.Element | undefined;
}

/**
 * Component for displaying a title with text. Given children will
 * be displayed below the text.
 *
 * @param {string} title - The title of the text
 * @param {Array<string>} text - The title of the text
 * @param {React.ReactNode} children - Children to display after text
 */
const PageSection: React.FC<Props> = ({ title, text, children }: Props) => {
  return (
    <div className="my-20 mx-auto">
      <h1 className="px-3 text-3xl text-center text-gray-600 font-bold mx-auto mb-3 dark:text-gray-200">
        {title}
      </h1>
      {text.map((textParagraph) => (
        <p key={textParagraph} className="text-xl mb-3 px-3 mx-auto dark:text-gray-300">
          {textParagraph}
        </p>
      ))}
      {children}
    </div>
  );
};

PageSection.defaultProps = {
  children: undefined,
};

export default PageSection;
