import React, { type Dispatch, type SetStateAction } from "react";

const LoginButtons = ({
  setVisible,
}: {
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex space-x-4">
      <button
        type="button"
        className="login-buttons bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300"
        onClick={() => setVisible(true)}
      >
        Logg inn
      </button>
    </div>
  );
};

export default LoginButtons;
