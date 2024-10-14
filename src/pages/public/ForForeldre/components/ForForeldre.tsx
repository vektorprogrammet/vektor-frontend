import getContent from "api/ForForeldre";
import TextPictureCard from "@/components/TextPictureCard";

const ForForeldre = (): JSX.Element => {
  const { title, ingress, cards, bottomText } = getContent();
  return (
    <div className="max-w-screen-lg mt-20 mb-20 mx-auto flex flex-col items-center dark:text-text-dark">
      <h1 className="max-w-2xl text-vektor-DARKblue text-4xl text-center font-bold mx-3 dark:text-text-dark">
        {title}
      </h1>
      <p className="max-w-2xl text-center mt-4 mb-20 text-xl mx-3">{ingress}</p>
      {cards.map(({ title: cardTitle, text, image }) => (
        <TextPictureCard
          key={cardTitle}
          title={cardTitle}
          text={text}
          imgPath={image.url}
          alt={image.alt}
        />
      ))}
      <p className="max-w-2xl text-center mt-20 text-xl mx-auto">
        {bottomText}
      </p>
    </div>
  );
};

export default ForForeldre;
