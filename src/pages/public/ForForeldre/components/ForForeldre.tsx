import type { JSX } from "react";

import getContent from "api/ForForeldre";

interface TextPictureCardProps {
  key: string;
  title: string;
  text: string;
  imgPath: string;
  alt: string;
  pictureOnLeft: boolean;
}

const TextPictureCard = ({
  title,
  text,
  imgPath,
  alt,
  pictureOnLeft = true,
}: TextPictureCardProps): JSX.Element => {
  const image = (
    <img
      src={imgPath}
      alt={alt}
      className="flex max-h-96 rounded-lg sm:w-auto md:max-w-96 md:h-fit"
    />
  );

  return (
    <div
      className={`flex ${pictureOnLeft ? "md:flex-row-reverse" : ""} justify-center md:justify-between items-center gap-5 md:gap-14 flex-wrap md:flex-nowrap`}
    >
      {image}
      <div className="flex flex-col max-w-6xl gap-3 md:gap-5">
        <h1 className="text-center  text-xl md:text-3xl font-bold text-vektor-DARKblue dark:text-text-dark">
          {title}
        </h1>
        <p className="md:w-full text-md md:text-lg dark:text-text-dark">
          {text}
        </p>
      </div>
      <Divider />
    </div>
  );
};
import Divider from "@/components/Divider";

const ForForeldre = (): JSX.Element => {
  const { title, ingress, cards, bottomText } = getContent();
  return (
    <div className="flex flex-col self-center items-center max-w-4xl p-5 mt-20 mb-20 gap-10 md:gap-28 dark:text-text-dark">
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="max-w-3xl text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
          {title}
        </h1>
        <p className="max-w-3xl text-md md:text-lg">{ingress}</p>
        <Divider />
      </div>
      {cards.map((card, index) => (
        <TextPictureCard
          key={card.title}
          title={card.title}
          text={card.text}
          imgPath={card.image.url.toString()}
          alt={card.image.alt}
          pictureOnLeft={index % 2 === 0}
        />
      ))}
      <p className="max-w-3xl text-md md:text-lg">{bottomText}</p>
    </div>
  );
};

export default ForForeldre;
