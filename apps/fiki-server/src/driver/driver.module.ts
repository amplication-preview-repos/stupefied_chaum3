import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DriverModuleBase } from "./base/driver.module.base";
import { DriverService } from "./driver.service";
import { DriverController } from "./driver.controller";
import { DriverResolver } from "./driver.resolver";

@Module({
  imports: [DriverModuleBase, forwardRef(() => AuthModule)],
  controllers: [DriverController],
  providers: [DriverService, DriverResolver],
  exports: [DriverService],
})
export class DriverModule {}
