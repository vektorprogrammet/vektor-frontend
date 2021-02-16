import React from 'react'

import { Link } from 'react-router-dom';
import FetchSponsors from '../Sponsor/FetchSponsors';



const Footer = () => {
    return(
        <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

        

          {/* 1st block INFORMATION */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-5 text-left">
            <h6 className="text-gray-800 font-medium mb-2 text-xl">Om oss</h6>
            <ul className="text-sm">
              <li className="mb-2">
                  <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Trondheim Oslo Bergen Ås</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">hovedstyret@vektorprogrammet.no</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">OrgNr: 998744814</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Høgskoleringen 5, 7491 Trondheim </Link>
              </li>                          
            </ul>
          </div>

          {/* 2nd block SITEMAP */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-2 text-left">
            <h6 className="text-gray-800 font-medium mb-2 text-xl">Sitemap</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/assistenter" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Assistenter</Link>
              </li>
              <li className="mb-2">
                <Link to="/team" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Team</Link>
              </li>
              <li className="mb-2">
                <Link to="/laerere" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">For skoler</Link>
              </li>
              <li className="mb-2">
                <Link to="/foreldre" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">For foreldre</Link>
              </li>
              <li className="mb-2">
                <Link to="/om" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Om oss</Link>
              </li>
              <li className="mb-2">
                <Link to="/kontakt" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Kontakt</Link>
              </li>
              
            </ul>
          </div>

          {/* 3rd block SPONSORS */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-5 text-left">
            <h6 className="text-gray-800 font-medium mb-2 text-xl">Sponsorer og samarbeidspartnere</h6>

            {/* TODO: Replace with fetch sponsors and remove hard-coded sponsors */}

           <FetchSponsors />

            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tekna</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Nasjonalt senter for realfagsrekruttering </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">NTNU IVT</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">NTNU IME</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Abelprisen </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">VisionTech</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Kulturstyret i Bergen</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">MN-faktultetet ved UiB</Link>
              </li>
            </ul>
          </div>
        

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

                 
          <div className="items-center text-sm text-gray-600 mr-4">Nettsiden driftes av Vektorprogrammets <a className="text-blue-600 hover:underline" href="/it">IT-team</a>.</div>
          <a className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"  
            target="_blank" href="https://github.com/vektorprogrammet" 
            rel="noreferrer"
            aria-label="Github">
            
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
    )
}


export default Footer;