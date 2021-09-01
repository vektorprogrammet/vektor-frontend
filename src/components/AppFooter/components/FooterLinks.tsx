import React from "react";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLinks = () => {
  return (
    <div className="text-white space-y-4">
      <div className="flex place-items-center space-x-2">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        <a href="https://www.facebook.com/vektorprogrammet/">Trondheim</a>
        <a href="https://www.facebook.com/vektorprogrammetNMBU/">Ås</a>
        <a href="https://www.facebook.com/Vektorprogrammet-UiO-1017596031601586/">Oslo</a>
        <a href="https://www.facebook.com/VektorprogrammetBergen/">Bergen</a>
      </div>

      <div className="flex place-items-center space-x-2">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <a href="mailto:hovedstyret@vektorprogrammet.no">hovedstyret@vektorprogrammet.no</a>
      </div>

      <div className="flex place-items-center space-x-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        <div>
          Høgskoleringen 5, 7491 Trondheim
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
