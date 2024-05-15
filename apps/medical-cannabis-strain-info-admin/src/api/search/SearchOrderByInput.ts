import { SortOrder } from "../../util/SortOrder";

export type SearchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  searchedAt?: SortOrder;
  searchResults?: SortOrder;
  strainName?: SortOrder;
  updatedAt?: SortOrder;
};
