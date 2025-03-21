export const departments = {
  trondheim: "Trondheim",
  aas: "Ås",
  bergen: "Bergen",
  hovedstyret: "Hovedstyret",
} as const;
export type Department = keyof typeof departments;
export type DepartmentPretty = (typeof departments)[Department];
