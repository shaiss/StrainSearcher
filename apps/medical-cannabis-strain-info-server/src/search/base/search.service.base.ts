/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Search as PrismaSearch } from "@prisma/client";

export class SearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SearchCountArgs, "select">): Promise<number> {
    return this.prisma.search.count(args);
  }

  async searches<T extends Prisma.SearchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchFindManyArgs>
  ): Promise<PrismaSearch[]> {
    return this.prisma.search.findMany<Prisma.SearchFindManyArgs>(args);
  }
  async search<T extends Prisma.SearchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchFindUniqueArgs>
  ): Promise<PrismaSearch | null> {
    return this.prisma.search.findUnique(args);
  }
  async createSearch<T extends Prisma.SearchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchCreateArgs>
  ): Promise<PrismaSearch> {
    return this.prisma.search.create<T>(args);
  }
  async updateSearch<T extends Prisma.SearchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchUpdateArgs>
  ): Promise<PrismaSearch> {
    return this.prisma.search.update<T>(args);
  }
  async deleteSearch<T extends Prisma.SearchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SearchDeleteArgs>
  ): Promise<PrismaSearch> {
    return this.prisma.search.delete(args);
  }
}
