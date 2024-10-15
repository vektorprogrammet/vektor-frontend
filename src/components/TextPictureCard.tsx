import Divider from "@/components/Divider";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
  pictureOnLeft?: boolean;
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
      src={imgPath.href}
      alt={alt}
      className="max-h-96 rounded-lg sm:w-auto md:max-w-md"
    />
  );

  return (
    <div className="flex w-full gap-5 md:gap-14 justify-center flex-wrap">
      {pictureOnLeft && image}
      <div className="flex flex-col max-w-6xl gap-3 md:gap-5 m-auto">
        <h1 className="text-center text-xl md:text-3xl font-bold text-vektor-DARKblue dark:text-text-dark">
          {title}
        </h1>
        <p className="max-w-lg text-md md:text-lg dark:text-text-dark">
          {text}
        </p>
      </div>
      {!pictureOnLeft && image}
      <Divider/>
    </div>
  );
};

TextPictureCard.defaultProps = {
  pictureOnLeft: true,
};

export default TextPictureCard;
