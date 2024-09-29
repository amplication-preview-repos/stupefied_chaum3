import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeliveryModuleBase } from "./base/delivery.module.base";
import { DeliveryService } from "./delivery.service";
import { DeliveryController } from "./delivery.controller";
import { DeliveryResolver } from "./delivery.resolver";

@Module({
  imports: [DeliveryModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeliveryController],
  providers: [DeliveryService, DeliveryResolver],
  exports: [DeliveryService],
})
export class DeliveryModule {}
