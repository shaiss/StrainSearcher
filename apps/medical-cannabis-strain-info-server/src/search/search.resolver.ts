import * as graphql from "@nestjs/graphql";
import { SearchResolverBase } from "./base/search.resolver.base";
import { Search } from "./base/Search";
import { SearchService } from "./search.service";

@graphql.Resolver(() => Search)
export class SearchResolver extends SearchResolverBase {
  constructor(protected readonly service: SearchService) {
    super(service);
  }
}
