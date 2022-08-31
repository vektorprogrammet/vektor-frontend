import React from "react";

const Hovedstyret = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <div className="font-bold text-2xl text-blue-800">Hovedstyret</div>
        <div className="text-base">Hovedstyret er det nasjonale styret i vektorprogrammet. De er et overordnet organ med ansvar for drifting av hele organisasjonen.</div>
        <br />
        <br />
        <div className="whitespace-nowrap flex space-x-1">
          <svg className="h-4 w-4 text-balck" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <a className="text-sm hover:underline" href="mailto:hovedstyret@vektorprogrammet.no">hovedstyret@vektorprogrammet.no</a>
        </div>
        <div className="whitespace-nowrap flex space-x-1">
          <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <div>6 medlemmer</div>
        </div>
        <div className="py-5">
          <button type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Les mer om hovedstyret</button>
        </div>
      </div>
      <div>
        <div className="divide-y divide-solid">
          <div className="py-2 mt-5">
            <div className="text-blue-800">David Ramsvik</div>
            <div>Leder</div>
            <a className="text-sm hover:underline" href="mailto:david@vektorprogrammet.no">david@vektorprogrammet.no</a>
          </div>
          <div className="py-2">
            <div className="text-blue-800">Andreas Hope Pedersen</div>
            <div>Nestleder</div>
            <a className="text-sm hover:underline" href="mailto:andreas.pedersen@vektorprogrammet.no">andreas.pedersen@vektorprogrammet.no</a>
          </div>
          <div className="py-2">
            <div className="text-blue-800">Hans Tjøtta</div>
            <div>IT-ansvarlig</div>
            <a className="text-sm hover:underline" href="mailto:hans@vektorprogrammet.no">hans@vektorprogrammet.no</a>
          </div>
          <div className="py-2">
            <div className="text-blue-800">Silje Li</div>
            <div>Profilering</div>
            <a className="text-sm hover:underline" href="mailto:silje.li@vektorprogrammet.no">silje.li@vektorprogrammet.no</a>
          </div>
          <div className="py-2">
            <div className="text-blue-800">Adrian Larsen</div>
            <div>Sponsor</div>
            <a className="text-sm hover:underline" href="mailto:adrian@vektorprogrammet.no">adrian@vektorprogrammet.no</a>
          </div>
          <div className="py-2">
            <div className="text-blue-800">Benedicte Vestrum</div>
            <div>Økonomi</div>
            <a className="text-sm hover:underline" href="mailto:benedicte@vektorprogrammet.no">benedicte@vektorprogrammet.no</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hovedstyret;
