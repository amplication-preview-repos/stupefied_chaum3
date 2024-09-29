import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DriverServiceBase } from "./base/driver.service.base";

@Injectable()
export class DriverService extends DriverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
