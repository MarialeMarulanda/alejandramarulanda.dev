export type ExperienceItem = {
  /** Key under `experience.items` in the locale dictionaries */
  id: "aem" | "wordstaff";
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "aem",
    technologies: ["SQL", "Data Modeling", "Technical Writing", "EN–ES Translation"],
  },
  {
    id: "wordstaff",
    technologies: ["Forms.app", "Process Automation", "Documentation", "User Support"],
  },
];
