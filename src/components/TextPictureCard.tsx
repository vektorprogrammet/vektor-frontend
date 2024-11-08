import Divider from "@/components/Divider";

interface Props {
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
  pictureOnLeft,
}: Props): JSX.Element => {
  const image = (
    <img
      src={imgPath}
      alt={alt}
      className="flex max-h-96 rounded-lg sm:w-auto md:max-w-md"
    />
  );

  return (
    <div className={`flex ${pictureOnLeft ? 'md:flex-row-reverse' : ''} justify-center md:justify-between gap-5 md:gap-14 flex-wrap md:flex-nowrap`}>
      {image}
      <div className="flex flex-col max-w-6xl gap-3 md:gap-5">
        <h1 className="text-center  text-xl md:text-3xl font-bold text-vektor-DARKblue dark:text-text-dark">
          {title}
        </h1>
        <p className="md:w-full text-md md:text-lg dark:text-text-dark">
          {text}
        </p>
      </div>
      <Divider/>
    </div>
  );
};

TextPictureCard.defaultProps = {
  pictureOnLeft: true,
};

export default TextPictureCard;
