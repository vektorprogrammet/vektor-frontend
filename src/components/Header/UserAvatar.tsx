import { Link } from "react-router-dom";



const UserAvatar = () => {
  return (
    <button tabIndex={0} className="dropdown dropdown-end" type="button">
      <div className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://placeimg.com/80/80/people"
            alt="profile avatar"
          />
        </div>
      </div>
      <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to="/kontrollpanel">Kontrollpanel</Link>
        </li>
        <li>
          <a href="#0">Min side</a>
        </li>
        <li>
          <a href="#0">Profil</a>
        </li>
        <li>
          <a href="#0">Mine utlegg</a>
        </li>
        <li className="text-red-500">
          <a href="#0">Logg ut</a>
        </li>
      </ul>
    </button>
  );
};

export default UserAvatar;