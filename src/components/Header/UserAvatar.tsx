import { Link } from "react-router-dom";

const UserAvatar = () => {
  return (
    <button tabIndex={0} className="dropdown dropdown-end" type="button">
      <div className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full border-solid border-2 border-gray-600">
          <img src="/images/team/IT-Tor.png" alt="profile avatar" />
        </div>
      </div>
      <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#EDF8FC] text-[#313131] rounded-box w-52 dark:bg-neutral-700 dark:text-white">
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
