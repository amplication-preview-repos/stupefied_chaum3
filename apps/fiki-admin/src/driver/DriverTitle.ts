import { Driver as TDriver } from "../api/driver/Driver";

export const DRIVER_TITLE_FIELD = "id";

export const DriverTitle = (record: TDriver): string => {
  return record.id?.toString() || String(record.id);
};
