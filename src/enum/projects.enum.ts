import { ObjectValues } from "@/util";

export const PROJECTS_TYPE = {
  AUTOMACOES: "AUTOMACOES",
  RENAULT: "RENAULT",
  BORALA: "BORALA",
  NOTORIA: "NOTORIA",
  CHATBOT: "CHATBOT",
  JORNADA: "JORNADA",
} as const;

export type ProjectsType = ObjectValues<typeof PROJECTS_TYPE>;
