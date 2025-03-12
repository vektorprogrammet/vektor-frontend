import { Divider } from "@/components/Divider";

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
  image,
}: TextPictureParagraphProps) => {
  return (
    <div
      className={`flex ${pictureOnLeft ? "md:flex-row-reverse" : ""} flex-wrap items-center justify-center gap-5 md:flex-nowrap md:justify-between md:gap-14`}
    >
      <img
        src={image.url.toString()}
        alt={image.alt}
        className="flex max-h-96 rounded-lg sm:w-auto md:h-fit md:max-w-96"
      />
      <div className="flex max-w-6xl flex-col gap-3 md:gap-5">
        <h1 className="text-center font-bold text-vektor-DARKblue text-xl md:text-3xl dark:text-text-dark">
          {title}
        </h1>
        <p className="text-md md:w-full md:text-lg dark:text-text-dark">
          {text}
        </p>
      </div>
      <Divider />
    </div>
  );
};
