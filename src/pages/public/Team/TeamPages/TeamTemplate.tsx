import React from "react";
import Member from "./Member";

interface Team {
  name: string;
  mail: string;
  text: string;
  members: Members[];
}

interface Members {
  name: string;
  image: string;
  role: string;
}

const TeamTemplate = ({
  name, mail, text, members
}: Team): JSX.Element => {
  return (
    <div>
      <h1 className="mt-10 text-vektor-darblue text-4xl text-center font-bold">
        {name}
      </h1>
      <div className="text-vektor-darblue text-center font-bold mt-7"> 
        Epost: <a className="text-sm overflow-hidden hover:underline" href={`mailto:${mail}`}>{mail}</a>
      </div>
      <div className="font-sans font-bold text-vektor-darblue text-lg text-center m-3">
        {text}
      </div>
      <div className={`flex flex-wrap justify-center`}>
        {members.map((data, id) => {
            return (<div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"> 
              <Member name={data.name} role={data.role} image={data.image} /> </div>)})}
      </div>
    </div>
  );
};

export default TeamTemplate;
