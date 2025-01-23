import type { JSX } from "react";

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

const TeamTemplate = ({ name, mail, text, members }: Team): JSX.Element => {
  return (
    <div>
      <h1 className="mt-10 text-vektor-darblue text-4xl text-center font-bold">
        {name}
      </h1>
      <div className="text-vektor-darblue text-center mt-5 text-base font-bold">
        Epost:{" "}
        <a
          className="text-sm overflow-hidden hover:underline break-all text-base font-normal"
          href={`mailto:${mail}`}
        >
          {mail}
        </a>
      </div>
      <div className="font-sans text-vektor-darblue text-xl text-center m-3 my-5">
        {text}
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {members.map((data) => {
          return (
            <div key={data.image} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <Member name={data.name} role={data.role} image={data.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamTemplate;
