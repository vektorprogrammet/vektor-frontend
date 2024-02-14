import React from "react";
import ProfileModal from "./ProfileModal";

const MineSoknader = (): JSX.Element => {
  return (
    <div className="flex justify-center mb-10 w-full">
      <div className="col-12 text-center">
        <h1 className="text-4xl font-medium text-vektor-darblue pb-2 pt-4">
          Mine Søknader
        </h1>
        <ProfileModal
          imgUrl="https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644805d1e8ef2.jpeg"
          name="Aaryan Neupan"
        />
      </div>
    </div>
  );
};

export default MineSoknader;
