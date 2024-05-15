import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SearchWhereInput = {
  id?: StringFilter;
  searchedAt?: DateTimeNullableFilter;
  searchResults?: StringNullableFilter;
  strainName?: StringNullableFilter;
};
