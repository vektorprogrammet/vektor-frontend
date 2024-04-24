import React from "react";

export const ApplyCard = (props: any) => {
  const { cities } = props;
  return (
    <form className="dark:bg-neutral-800">

      <h1 className="text-xl my-8 text-vektor-darblue font-bold text-center dark:text-gray-200">
        {cities}
      </h1>

      <div className="mt-1 mb-8 text-center dark:text-gray-300">Søknadsfrist: </div>

      <div className="grid justify-items-center dark:text-gray-800">
        <div className="flex flex-wrap w-full my-4 space-x-8 justify-center">

          <input
            type="fornavn"
            className="mb-2 p-1 rounded block border-solid border-2 border-vektor-darblue"
            placeholder="Fornavn"
          />

          <input
            type="etternavn"
            className="mb-2 p-1 rounded block border-solid border-2 border-vektor-darblue"
            placeholder="Etternavn"
          />

        </div>

        <div className="flex mt-3 justify-center w-full">
          <input
            type="email"
            className="mb-2 p-1 rounded inline-flex items-center form-input w-1/2 border-solid border-2 border-vektor-darblue"
            placeholder="E-post"
          />
        </div>

        <div className="flex mt-3 justify-center w-full">
          <input
            type="telefon"
            className="mb-2 p-1 rounded inline-flex items-center form-input w-1/2 border-solid border-2 border-vektor-darblue"
            placeholder="Telefon nr"
          />
        </div>

        <div className="flex mt-3 justify-center w-full">
          <input
            type="linje"
            className="mb-2 p-1 rounded inline-flex items-center form-input w-1/2 border-solid border-2 border-vektor-darblue"
            placeholder="Linje"
          />
        </div>

        <div className="my-4 space-x-4">
          <select className="p-2 rounded border-solid border-2 border-vektor-darblue text-vektor-darblue font-bold" defaultValue="Kjønn">
            <option value="Kjønn" disabled>
              Kjønn
            </option>
            <option className="">Mann</option>
            <option>Kvinne</option>
            <option>Annet</option>
          </select>

          <select className="p-2 rounded border-solid border-2 border-vektor-darblue text-vektor-darblue font-bold" defaultValue="Årstrinn">
            <option value="Årstrinn" disabled>
              Årstrinn
            </option>
            <option>1. klasse</option>
            <option>2. klasse</option>
            <option>3. klasse</option>
            <option>4. klasse</option>
            <option>5. klasse</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-vektor-darblue hover:bg-vektor-blue text-white font-bold py-2 px-4 m-8 rounded "
        >
          Søk nå!
        </button>

      </div>
      <div className="items-center mx-16 mb-10 text-center dark:text-gray-300">
        Har du vært assistent tidligere? Da kan du søke på nytt her (krever
        innlogging)
      </div>

    </form>
  );
};
export default ApplyCard;
