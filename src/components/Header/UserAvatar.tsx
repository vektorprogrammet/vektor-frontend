import { Link } from "react-router-dom";
import React from "react";

const UserAvatar = () => {
  return (
    <button tabIndex={0} className="dropdown dropdown-end" type="button">
      <div className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full">
          <img src="https://placekitten.com/80/80" alt="profile avatar" />
        </div>
      </div>
      <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link reloadDocument to="/kontrollpanel">
            Kontrollpanel
          </Link>
        </li>
        <li>
          <Link reloadDocument to="/profil/1">
            Profil
          </Link>
        </li>
        <li>
          <Link reloadDocument to="/mine-soknader/1">
            Mine Søknader
          </Link>
        </li>
        <li>
          <Link reloadDocument to="/utlegg">
            Mine utlegg
          </Link>
        </li>
        <li className="text-red-500">
          <a href="#0">Logg ut</a>
        </li>
      </ul>
    </button>
  );
};

export default UserAvatar;
