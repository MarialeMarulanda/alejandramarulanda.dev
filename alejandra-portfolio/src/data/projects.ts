export type ProjectItem = {
  /** Key under `projects.items` in the locale dictionaries */
  id: "iot" | "antenna" | "thesis";
  technologies: string[];
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: "iot",
    technologies: ["ESP32", "Raspberry Pi", "MQTT", "ESP-NOW", "WiFi"],
    featured: true,
  },
  {
    id: "antenna",
    technologies: ["RF Design", "2.4 GHz", "VNA", "Spectrum Analyzer", "Biquad", "Cloverleaf"],
  },
  {
    id: "thesis",
    technologies: ["Cybersecurity", "Phishing", "SIM Swapping", "Social Engineering"],
  },
];
