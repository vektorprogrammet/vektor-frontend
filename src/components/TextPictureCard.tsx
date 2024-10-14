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
    <div className="flex w-full gap-5 justify-between flex-wrap">
      {pictureOnLeft && image}
      <div className="flex flex-col max-w-6xl gap-3 m-auto">
        <h1 className="text-center text-xl font-bold text-vektor-DARKblue dark:text-text-dark">
          {title}
        </h1>
        <p className="max-w-lg text-md dark:text-text-dark">
          {text}
        </p>
      </div>
      {!pictureOnLeft && image}
    </div>
  );
};

TextPictureCard.defaultProps = {
  pictureOnLeft: true,
};

export default TextPictureCard;
