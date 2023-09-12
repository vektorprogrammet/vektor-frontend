import React from "react";

interface TeamMember {
  name: string,
  role: string,
  image: string
}

const Member = ({
  name, role, image,
}: TeamMember): JSX.Element => {
  return (
    <div className="justify-between content-center max-w-6xl">
      <img
        src={image}
        className="h-32 mt-6 rounded-full mx-auto mb-2 grayscale"
      />
      <div className="font-sans font-bold text-vektor-darblue text-center mt-3">{name}</div>
      <div className="font-sans text-center">{role}</div>
    </div>
  );
};

export default Member;
