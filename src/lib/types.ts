const cities = {
  trondheim: "Trondheim",
  bergen: "Bergen",
  aas: "Ås",
} as const;
type City = keyof typeof cities;
export type CityPretty = (typeof cities)[City];

export const departments = {
  trondheim: "Trondheim",
  aas: "Ås",
  bergen: "Bergen",
  hovedstyret: "Hovedstyret",
} as const;
type Department = keyof typeof departments;
export type DepartmentPretty = (typeof departments)[Department];
