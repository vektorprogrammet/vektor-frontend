import { useNavigate } from "react-router";

interface Props {
  title: string;
  text: string;
  mail: string;
  button_name: string;
  numberOfMembers: number;
  url: string;
}

const Division = ({
  title,
  text,
  mail,
  numberOfMembers,
  button_name,
  url,
}: Props) => {
  const navigate = useNavigate();

  const chosenStyle = title === "Styret" ? "w-64" : "w-64";

  return (
    <div
      className={`h-48 flex flex-col justify-between rounded-md shadow-md bg-vektor-light-blue dark:bg-gray-600 dark:text-white ${chosenStyle}`}
      onClick={() => navigate(`/team/${url}`)}
    >
      <div className="bg-vektor-blue dark:bg-vektor-darblue rounded-t-md h-10 content-center h-20">
        <h1 className="text-center text-lg text-vektor-darblue font-medium dark:text-white">
          {title}
        </h1>
      </div>
      <div className="text-sm mx-2 h-full my-2 mx-3">
        <p>{text}</p>
      </div>
      <div className="flex flex-row text-sm space-x-1 content-end mx-3">
        <svg
          className="h-4 w-4 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <div>{`${numberOfMembers} medlemmer`}</div>
      </div>
      <div className="flex w-full justify-end self-end mb-1.5 mr-1.5">
        <button
          type="button"
          onClick={() => navigate(`/team/${url}`)}
          className="btn btn-success btn-sm text-white rounded-full"
        >
          {button_name}
        </button>
      </div>
    </div>
  );
};

export default Division;
