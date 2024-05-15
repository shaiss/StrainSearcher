import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StrainService } from "./strain.service";
import { StrainControllerBase } from "./base/strain.controller.base";

@swagger.ApiTags("strains")
@common.Controller("strains")
export class StrainController extends StrainControllerBase {
  constructor(protected readonly service: StrainService) {
    super(service);
  }
}
