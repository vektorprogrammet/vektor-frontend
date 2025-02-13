interface DivisionProps {
  name: string;
  subtitle?: string;
  description?: string;
  mail: string;
  address?: string;
  members?: number;
  button?: boolean;
  contactInfos: ContactInfo[];
  contact: boolean;
}
interface ContactInfo {
  name: string;
  title?: string;
  mail: string;
}

const Division = ({
  name,
  subtitle,
  description,
  mail,
  members,
  button,
  address,
  contactInfos,
  contact,
}: DivisionProps): JSX.Element => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 sm:p-6 pd:2">
        <div>
          <div className="font-bold text-2xl text-blue-800 dark:text-neutral-200">
            {name}
          </div>
          {subtitle && (
            <div className="text-base dark:text-neutral-200">{subtitle}</div>
          )}
          {description && <div className="text-base">{description}</div>}
          <div className="flex space-x-1 mt-3 md:mt-8">
            <svg
              className="h-4 w-4 text-balck"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <a
              className="truncate block text-sm hover:underline"
              href={`mailto:${mail}`}
            >
              {mail}
            </a>
          </div>
          {address && (
            <div className="flex space-x-1 text-sm">
              <svg
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>{address}</div>
            </div>
          )}
          {members && (
            <div className="whitespace-nowrap flex space-x-1 text-sm">
              <svg
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>{`${members} medlemmer`}</div>
            </div>
          )}
          {button && (
            <div className="py-5 left-0">
              <button
                type="submit"
                className="bg-vektor-darkblue hover:bg-vektor-blue text-white font focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Les mer om hovedstyret
              </button>
            </div>
          )}
        </div>
        <div className="divide-y divide-solid">
          {contactInfos.map((data, id) => {
            return (
              <div className="py-2 mt-5" key={data.name}>
                <div className="text-blue-800 dark:text-gray-200">
                  {contactInfos[id].name}
                </div>
                {contactInfos[id].title && <div>{contactInfos[id].title}</div>}
                <a
                  className="text-sm hover:underline truncate block"
                  href={`mailto:${contactInfos[id].mail}`}
                >
                  {contactInfos[id].mail}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {contact && (
        <div className="dark:bg-neutral-800 max-w-[600px]">
          <div className="font-bold text-2xl text-blue-800 text-center pt-10 dark:text-gray-200">{`Kontakt styret i ${name}`}</div>
          <form>
            <div className="mb-6 mt-7 grid xl:grid-cols-2 xl:gap-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ditt navn
                <input
                  type="name"
                  id="name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </label>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Din e-post
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="topic"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Emne
                <input
                  type="topic"
                  id="topic"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Melding
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-vektor-darkblue hover:bg-vektor-blue text-white font focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Send melding
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Division;
