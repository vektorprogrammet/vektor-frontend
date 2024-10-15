import getContent from "api/ForForeldre";
import TextPictureCard from "@/components/TextPictureCard";
import Divider from "@/components/Divider";

const ForForeldre = (): JSX.Element => {
  const { title, ingress, cards, bottomText } = getContent();
  return (
    <div className="flex flex-col items-center p-5 mt-40 mb-20 mx-auto gap-10 md:gap-40 dark:text-text-dark">
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="max-w-3xl text-vektor-DARKblue text-2xl md:text-4xl text-center font-bold dark:text-text-dark">
          {title}
        </h1>
        <p className="max-w-3xl text-md md:text-lg">{ingress}</p>
        <Divider />
      </div>
      {cards.map(({ title: cardTitle, text, image }) => (
        <TextPictureCard
          key={cardTitle}
          title={cardTitle}
          text={text}
          imgPath={image.url}
          alt={image.alt}
        />
      ))}
      <p className="max-w-3xl text-md md:text-lg">
        {bottomText}
      </p>
    </div>
  );
};

export default ForForeldre;
