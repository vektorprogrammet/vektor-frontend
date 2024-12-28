import getContent from "api/ForForeldre";
import TextPictureCard from "@/components/TextPictureCard";
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
      <p className="max-w-3xl text-md md:text-lg">
        {bottomText}
      </p>
    </div>
  );
};

export default ForForeldre;
