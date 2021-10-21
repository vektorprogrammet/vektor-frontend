import React, {useState} from 'react'
import { HighlightSpanKind } from 'typescript'


interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

export const SelectCity = (props: any) => {
  return(
      <button onClick={props.selectCity}>{props.cities}</button>
  )
};


export const scrollToBottom = () =>{
  window.scrollTo({
    top: document.body.offsetHeight,
    left: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};


const TextPictureCard = ({
  title, text, imgPath, alt,
}: Props): JSX.Element => {
  return (

    <div className="flex w-full mx-auto justify-between flex-wrap">
      <div className="max-w-6xl">
        <img
          src={imgPath.href}
          alt={alt}
          className="h-24 mt-6 rounded-lg mx-auto"
        />
        <p className="font-sans text-xl text-center p-2">{title}</p>
        <p className="text-base text-center p-1">{text}</p>
      </div>

    </div>

  );
};

export default TextPictureCard;


