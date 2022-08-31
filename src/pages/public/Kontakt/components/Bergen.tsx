import React from "react";

const Bergen = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="font-bold text-2xl text-blue-800">Bergen</div>
          <div className="text-base">Universitetet i Bergen</div>
          <br />
          <br />
          <div className="whitespace-nowrap flex space-x-1">
            <svg className="h-4 w-4 text-balck" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <a className="text-sm hover:underline" href="mailto:uib@vektorprogrammet.no">uib@vektorprogrammet.no</a>
          </div>
        </div>
        <div>
          <div className="divide-y divide-solid">
            <div className="py-2 mt-5">
              <div className="text-blue-800">Styret</div>
              <a className="text-sm hover:underline" href="mailto:uib@vektorprogrammet.no">uib@vektorprogrammet.no</a>
            </div>
            <div className="py-2">
              <div className="text-blue-800">Skolekoordinering</div>
              <a className="text-sm hover:underline" href="mailto:skolekoordinering.uib@vektorprogrammet.no">skolekoordinering.uib@vektorprogrammet.no</a>
            </div>
            <div className="py-2">
              <div className="text-blue-800">Rekruttering</div>
              <a className="text-sm hover:underline" href="mailto:rekruttering.uib@vektorprogrammet.no">rekruttering.uib@vektorprogrammet.no</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl text-blue-800 text-center pt-10">Kontakt styret i Bergen</div>
        <form>
          <div className="mb-6 mt-7">
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Ditt navn
                <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </label>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Din e-post
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Emne
              <input type="topic" id="topic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </label>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Melding
              <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send melding</button>
        </form>
      </div>
    </>
  );
};

export default Bergen;
