import type { JSX } from "react";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

export const SelectCity = (props: {
  selectCity: () => void;
  cities: string;
}) => {
  const { selectCity, cities } = props;
  return (
    <button type="button" onClick={selectCity}>
      {cities}
    </button>
  );
};

export const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};

const TextPictureCard = ({ title, text, imgPath, alt }: Props): JSX.Element => {
  return (
    <div className="leading-relaxed flex w-full mx-auto justify-between flex-wrap">
      <div className="max-w-6xl ">
        <img
          src={imgPath.href}
          alt={alt}
          className="h-24 mt-6 rounded-lg mx-auto mb-2"
        />
        <div className="font-sans font-bold text-xl text-primary text-center p-1">
          {title}
        </div>
        <div className="font-sans text-center my-1 dark:text-text-dark">
          {text}
        </div>
      </div>
    </div>
  );
};

export default TextPictureCard;
