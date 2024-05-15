import * as graphql from "@nestjs/graphql";
import { StrainResolverBase } from "./base/strain.resolver.base";
import { Strain } from "./base/Strain";
import { StrainService } from "./strain.service";

@graphql.Resolver(() => Strain)
export class StrainResolver extends StrainResolverBase {
  constructor(protected readonly service: StrainService) {
    super(service);
  }
}
