import { ObjectValues } from "@/util";

export const EDUCATION_VARIANT_TYPE = {
  PURPLE: "PURPLE",
  GOLD: "GOLD",
} as const;

export type EducationVariantType = ObjectValues<typeof EDUCATION_VARIANT_TYPE>;
