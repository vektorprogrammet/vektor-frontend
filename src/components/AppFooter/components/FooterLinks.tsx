import React from "react";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <div className="text-white footerLinks">
      <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="icon" />
      <div className="flex space-x-2 place-items-center">
        <a className="hover:underline" href="https://www.facebook.com/vektorprogrammet/">Trondheim</a>
        <a className="hover:underline" href="https://www.facebook.com/vektorprogrammetNMBU/">Ås</a>
        <a className="hover:underline" href="https://www.facebook.com/VektorprogrammetBergen/">Bergen</a>
      </div>

      <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
      <div className="flex space-x-2 place-items-center">
        <a className="hover:underline" href="mailto:hovedstyret@vektorprogrammet.no">hovedstyret@vektorprogrammet.no</a>
      </div>

      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="icon" />
      <div className="flex space-x-2 place-items-center">
        <div>
          Høgskoleringen 5, 7491 Trondheim
        </div>
      </div>

      <FontAwesomeIcon icon={faFolderOpen} size="2x" className="icon" />
      <div className="flex space-x-2 place-items-center">
        <div>
          OrgNr: 998744814
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
