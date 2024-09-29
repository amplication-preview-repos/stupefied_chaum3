import { DriverWhereInput } from "./DriverWhereInput";
import { DriverOrderByInput } from "./DriverOrderByInput";

export type DriverFindManyArgs = {
  where?: DriverWhereInput;
  orderBy?: Array<DriverOrderByInput>;
  skip?: number;
  take?: number;
};
