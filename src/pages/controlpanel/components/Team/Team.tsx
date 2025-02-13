import { useNavigate } from "react-router";
import CreateTable from "../CreateTable";

const Team = (): JSX.Element => {
  const navigate = useNavigate();
  interface Team {
    name: string;
    email: string;
    opptak: string;
  }

  const example1: Team[] = [
    {
      name: "IT",
      email: "Aaryan.er.kul@hotmail.com",
      opptak: "Åpent",
    },
    {
      name: "Evaluering",
      email: "custom@epost.no",
      opptak: "Stengt",
    },
    {
      name: "Rekruttering",
      email: "email@email.com",
      opptak: "Stengt",
    },
    {
      name: "Proffilering",
      email: "email@email.com",
      opptak: "Stengt",
    },
    {
      name: "Skolekoordinering",
      email: "email@email.com",
      opptak: "Stengt",
    },
    {
      name: "Sponsor",
      email: "email@email.com",
      opptak: "Stengt",
    },
    {
      name: "Styret",
      email: "email@email.com",
      opptak: "Stengt",
    },
    {
      name: "Økonomi",
      email: "email@email.com",
      opptak: "Stengt",
    },
  ];

  return (
    <div className="w-full">
      <div className="pt-10 mt-50 grid-rows-2 grid-cols-2 flex flex-col items-center">
        <h1 className="text-2xl row-start-1 row-end-1">Team</h1>
        <CreateTable header={["Navn", "Epost", "Opptak"]} content={example1} />
        <button
          type="button"
          className="login-buttons mt-6 text-black px-4 py-2 rounded-full duration-300 mb-4 bg-white hover:bg-slate-300"
          onClick={() => navigate("/kontrollpanel/opprett-team")}
        >
          + Opprett Team
        </button>
      </div>
    </div>
  );
};

export default Team;
