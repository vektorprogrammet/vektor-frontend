interface Member {
  name: string;
  image: string;
  role: string;
}

export function TeamTemplate({
  name,
  mail,
  text,
  members,
}: {
  name: string;
  mail: string;
  text: string;
  members: Array<Member>;
}) {
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
              <div className="justify-between content-center max-w-6xl">
                <img
                  alt={`Bilde av ${data.name}`}
                  src={data.image}
                  className="h-32 mt-6 rounded-full mx-auto mb-2 grayscale"
                />
                <div className="font-sans font-bold text-vektor-darblue text-center mt-3">
                  {data.name}
                </div>
                <div className="font-sans text-center">{data.role}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
