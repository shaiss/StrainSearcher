import { Module } from "@nestjs/common";
import { StrainModuleBase } from "./base/strain.module.base";
import { StrainService } from "./strain.service";
import { StrainController } from "./strain.controller";
import { StrainResolver } from "./strain.resolver";

@Module({
  imports: [StrainModuleBase],
  controllers: [StrainController],
  providers: [StrainService, StrainResolver],
  exports: [StrainService],
})
export class StrainModule {}
