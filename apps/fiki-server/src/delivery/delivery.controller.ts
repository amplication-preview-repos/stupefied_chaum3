import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryService } from "./delivery.service";
import { DeliveryControllerBase } from "./base/delivery.controller.base";

@swagger.ApiTags("deliveries")
@common.Controller("deliveries")
export class DeliveryController extends DeliveryControllerBase {
  constructor(
    protected readonly service: DeliveryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
