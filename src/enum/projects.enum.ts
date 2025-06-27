import { ObjectValues } from "@/util";

export const PROJECTS_TYPE = {
  SCRAPER: "SCRAPER",
  DONNA: "DONNA",
  RENAULT: "RENAULT",
  BORALA: "BORALA",
} as const;

export type ProjectsType = ObjectValues<typeof PROJECTS_TYPE>;
