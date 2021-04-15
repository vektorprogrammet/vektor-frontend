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
  
    

 
    <div>
         <div className= "grid grid-rows-1 ">
      <div>

        <img
        src={imgPath.href}
        alt={alt}
        className="h-24 mt-6 rounded-lg mx-auto"
      />
        <p className="font-bold flex-row">{title}</p>
        <p className="text-base">{text}</p>
      </div>

    </div>

      </div>
  
    
  );
};

export default TextPictureCard;