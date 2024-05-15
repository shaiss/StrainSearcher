import { SearchWhereInput } from "./SearchWhereInput";

export type SearchListRelationFilter = {
  every?: SearchWhereInput;
  some?: SearchWhereInput;
  none?: SearchWhereInput;
};
