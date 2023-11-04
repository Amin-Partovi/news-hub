import { CommonQueryParams } from "types";
import { GuardianRequestParams } from "./types";
import { dateToDashSeparated } from "utils";

export function transformData(
  params?: CommonQueryParams
): GuardianRequestParams {
  const { q, category, from, to } = params || {};
  const modifiedParams: GuardianRequestParams = {
    ...(q !== undefined ? { q } : {}),
    ...(category !== undefined ? { section: category } : {}),
    ...(from !== undefined ? { from_date: dateToDashSeparated(from) } : {}),
    ...(to !== undefined ? { to_date: dateToDashSeparated(to) } : {}),
  };
  return modifiedParams;
}
