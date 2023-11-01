import { CommonQueryParams } from "types";
import { GuardianRequestParams } from "./types";

export function transformData(
  params?: CommonQueryParams
): GuardianRequestParams {
  const { q, category, from, to } = params || {};
  const modifiedParams: GuardianRequestParams = {
    ...(q !== undefined ? { q } : {}),
    ...(category !== undefined ? { section: category } : {}),
    ...(from !== undefined ? { from_date: from } : {}),
    ...(to !== undefined ? { to_date: to } : {}),
  };
  return modifiedParams;
}
