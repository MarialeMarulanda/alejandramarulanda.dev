export type EducationItem = {
  /** Key under `education.items` in the locale dictionaries */
  id: "upiita" | "icel" | "eccc";
};

export const education: EducationItem[] = [
  { id: "upiita" },
  { id: "icel" },
  { id: "eccc" },
];
