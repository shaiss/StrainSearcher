import { SearchWhereInput } from "./SearchWhereInput";
import { SearchOrderByInput } from "./SearchOrderByInput";

export type SearchFindManyArgs = {
  where?: SearchWhereInput;
  orderBy?: Array<SearchOrderByInput>;
  skip?: number;
  take?: number;
};
