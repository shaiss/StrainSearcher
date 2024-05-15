import { StrainWhereInput } from "./StrainWhereInput";
import { StrainOrderByInput } from "./StrainOrderByInput";

export type StrainFindManyArgs = {
  where?: StrainWhereInput;
  orderBy?: Array<StrainOrderByInput>;
  skip?: number;
  take?: number;
};
