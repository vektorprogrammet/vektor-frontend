import React, { type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router";

const LoginButtons = () => {
  return (
    <div className="flex space-x-4">
      <Link reloadDocument to="/kontrollpanel">
        <button
          type="button"
          className="btn btn-success btn-sm text-white rounded-full h-10 w-32"
        >
          Logg inn
        </button>
      </Link>
    </div>
  );
};

export default LoginButtons;
