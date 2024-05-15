import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StrainServiceBase } from "./base/strain.service.base";

@Injectable()
export class StrainService extends StrainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
