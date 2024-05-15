import { Module } from "@nestjs/common";
import { SearchModuleBase } from "./base/search.module.base";
import { SearchService } from "./search.service";
import { SearchController } from "./search.controller";
import { SearchResolver } from "./search.resolver";

@Module({
  imports: [SearchModuleBase],
  controllers: [SearchController],
  providers: [SearchService, SearchResolver],
  exports: [SearchService],
})
export class SearchModule {}
