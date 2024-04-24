interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
  link?: {
    text: string;
    path: URL;
  };
}

const PageTitleCard = ({
  title,
  text,
  imgPath,
  alt,
  link,
}: Props): JSX.Element => {
  return (
    <div className="flex max-w-7xl mx-auto justify-between flex-wrap mt-10">
      <div className="max-w-6xl  m-auto">
        <h1 className="text-left text-gray-600 px-3 text-4xl font-bold dark:text-gray-200">
          {title}
        </h1>
        <p className="max-w-lg text-xl mt-3 px-3 dark:text-gray-300">{text}</p>
        {link && (
          <a
            className="block text-xl font-bold mt-3 px-3 dark:text-gray-200"
            href={link?.path.href}>
            {link?.text}
          </a>
        )}
      </div>
      <img
        src={imgPath.href}
        alt={alt}
        className=" sm:max-w-md w-max mt-6 rounded-lg mx-auto"
      />
    </div>
  );
};

PageTitleCard.defaultProps = { link: undefined };

export default PageTitleCard;
