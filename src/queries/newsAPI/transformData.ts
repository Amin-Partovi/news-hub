import { dateToDashSeparated } from "utils";
import { CommonQueryParams } from "types";

export function transformData(params?: CommonQueryParams) {
  const { from, to } = params || {};
  const modifiedParams = {
    ...params,
    ...(from !== undefined ? { from_date: dateToDashSeparated(from) } : {}),
    ...(to !== undefined ? { to_date: dateToDashSeparated(to) } : {}),
  };

  return modifiedParams;
}
