import { Strain as TStrain } from "../api/strain/Strain";

export const STRAIN_TITLE_FIELD = "name";

export const StrainTitle = (record: TStrain): string => {
  return record.name?.toString() || String(record.id);
};
