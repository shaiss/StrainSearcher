import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchServiceBase } from "./base/search.service.base";

@Injectable()
export class SearchService extends SearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
