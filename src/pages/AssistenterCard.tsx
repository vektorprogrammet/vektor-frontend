import React from "react";

interface Props {
  title: string;
  text: string;
  imgPath: URL;
  alt: string;
}

const TextPictureCard = ({
  title, text, imgPath, alt,
}: Props): JSX.Element => {
  return (
  
    

    <div className= "grid grid-rows-3 ">
    <div>
      <div>

        <img
        src={imgPath.href}
        alt={alt}
        
      />
        <p className="font-bold flex-row">{title}</p>
        <p className="text-base">{text}</p>
      </div>

      </div>
    

    </div>
    
  );
};

export default TextPictureCard;