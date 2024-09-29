import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DriverService } from "./driver.service";
import { DriverControllerBase } from "./base/driver.controller.base";

@swagger.ApiTags("drivers")
@common.Controller("drivers")
export class DriverController extends DriverControllerBase {
  constructor(
    protected readonly service: DriverService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
