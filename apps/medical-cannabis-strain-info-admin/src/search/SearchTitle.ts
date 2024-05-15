import { Search as TSearch } from "../api/search/Search";

export const SEARCH_TITLE_FIELD = "strainName";

export const SearchTitle = (record: TSearch): string => {
  return record.strainName?.toString() || String(record.id);
};
