interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

const KontaktCard = ({ title, text, imgPath, alt }: Props): JSX.Element => {
  return (
    <div className="flex w-full mx-auto justify-around flex-wrap">
      <div className="max-w-6xl mt-5 flex flex-col">
        <h1 className=" text-gray-600 text-4xl font-bold mx-3 dark:text-gray-200">
          {title}
        </h1>
        <p className="max-w-md mt-4 mb-20 text-xl mx-3 dark:text-gray-300">
          {text}
        </p>
      </div>
      <img
        src={imgPath.href}
        alt={alt}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg mt-5 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 mx-auto mr-auto ml-auto dark:invert dark:saturate-0"
      />
    </div>
  );
};

export default KontaktCard;
