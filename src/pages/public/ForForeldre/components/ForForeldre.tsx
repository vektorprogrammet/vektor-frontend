import getContent from "api/ForForeldre";
import TextPictureCard from "@/components/TextPictureCard";

const ForForeldre = (): JSX.Element => {
  const { title, ingress, cards, bottomText } = getContent();
  return (
    <div className="max-w-screen-lg p-5 mt-20 mb-20 mx-auto gap-5 flex flex-col items-center dark:text-text-dark">
      <h1 className="max-w-2xl text-vektor-darkblue text-2xl text-center font-bold dark:text-text-dark">
        {title}
      </h1>
      <p className="max-w-2xl text-md">{ingress}</p>
      {cards.map(({ title: cardTitle, text, image }) => (
        <TextPictureCard
          key={cardTitle}
          title={cardTitle}
          text={text}
          imgPath={image.url}
          alt={image.alt}
        />
      ))}
      <p className="max-w-2xl text-md">
        {bottomText}
      </p>
    </div>
  );
};

export default ForForeldre;
