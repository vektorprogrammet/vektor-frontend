import React from "react";

interface Props {
  title: string;
  text: string;
  mail: string;
  button_name: string;
  numberOfMembers: number;
}

const Division = ({
  title, text, mail, numberOfMembers, button_name,
}: Props): JSX.Element => {
  return (
    <div className="relative grow-0 content-center grow rounded bg-grey-light w-80 shadow-md border-2 place-items-center">
      <div className="justify-between py-1 text-center border-b-2 text-blue-900 text-lg font-bold">
        {title}
      </div>
      <div className="text-sm mt-2 bg-white p-2 rounded cursor-pointer hover:bg-grey-lighter pb-14 dark:bg-gray-600 dark:text-gray-300">
        {text}
        <div className="space-y-1 pt-12">
          <div className="flex space-x-1 space-y-0 items-end">
            <svg className="h-4 w-4 text-balck" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <a className="text-sm truncate overflow-hidden hover:underline" href={`mailto:${mail}`}>{mail}</a>
          </div>
          <div className="flex flex-row space-x-1 items-center">
            <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className="top-0">{`${numberOfMembers} medlemmer`}</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 align-bottom">
        <button type="button" className="py-2 px-4 w-full font-medium text-mid border-b inset-x-0 bottom-0 bg-vektor-darblue hover:bg-vektor-blue text-white font duration-200">
          {button_name}
        </button>
      </div>
    </div>
  );
};

export default Division;
