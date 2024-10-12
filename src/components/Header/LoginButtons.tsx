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
        className="btn btn-success text-white rounded-full"
        onClick={() => setVisible(true)}
      >
        Logg inn
      </button>
    </div>
  );
};

export default LoginButtons;
