import React from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const validCities = {
  bergen: "Bergen",
  trondheim: "Trondheim",
  ås: "Ås",
} as const;
const semesters = {
  15: "Vår 2015",
  16: "Høst 2015",
  17: "Vår 2016",
  18: "Høst 2016",
  19: "Vår 2017",
  20: "Høst 2017",
  21: "Vår 2018",
  22: "Høst 2018",
  23: "Vår 2019",
  24: "Høst 2019",
  93: "Vår 2020",
  94: "Høst 2020",
};

type SearchParams = {
  semester: string;
  city: string;
};
const SearchParamsForm = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (data: SearchParams) => {
    setSearchParams(data);
  };

  const searchParamsSemester = searchParams.get("semester");
  const searchParamsCity = searchParams.get("city");

  return (
    <form className="flex items-center gap-2 mx-4 my-2">
      <select
        id="semester"
        className="select select-bordered z-[1] menu shadow bg-base-100 rounded-box"
        onChange={(e) => {
          handleChange({
            semester: e.target.value,
            city: searchParams.get("city") || "",
          });
        }}
      >
        <option disabled defaultValue={searchParamsSemester || "Velg semester"}>
          {searchParamsSemester || "Velg semester"}
        </option>
        {Object.entries(semesters).map((semester) => {
          const semesterName = semester[1];
          return (
            <option key={crypto.randomUUID()} value={semesterName}>
              {semesterName}
            </option>
          );
        })}
      </select>

      <select
        id="city"
        className="select select-bordered z-[1] menu shadow bg-base-100 rounded-box"
        onChange={(e) => {
          handleChange({
            semester: searchParamsSemester || "",
            city: e.target.value,
          });
        }}
      >
        <option disabled defaultValue={searchParamsCity || "Velg by"}>
          {searchParamsCity || "Velg by"}
        </option>
        {Object.values(validCities).map((city) => {
          return (
            <option key={crypto.randomUUID()} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </form>
  );
};

const NavHeader = (): JSX.Element => {
  return (
    <nav className="flex gap-2 justify-between bg-blue-200">
      <Breadcrumbs />

      <SearchParamsForm />
    </nav>
  );
};

export default NavHeader;
