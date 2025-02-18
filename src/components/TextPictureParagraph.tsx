import Divider from "@/components/Divider";

interface TextPictureParagraphProps {
  title: string;
  text: string;
  pictureOnLeft: boolean;
  image: {
    url: URL;
    alt: string;
    };
  }
export interface TextPictureParagraphAPIProps {
  title: string;
  text: string;
  image: {
    url: URL;
    alt: string;
  };
}

export const TextPictureParagraph = ({
  title,
  text,
  pictureOnLeft = true,
  image
}: TextPictureParagraphProps) => {
  
  return (
    <div
      className={`flex ${pictureOnLeft ? "md:flex-row-reverse" : ""} justify-center md:justify-between items-center gap-5 md:gap-14 flex-wrap md:flex-nowrap`}
    >
      <img
      src={image.url.toString()}
      alt={image.alt}
      className="flex max-h-96 rounded-lg sm:w-auto md:max-w-96 md:h-fit"
      />
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
