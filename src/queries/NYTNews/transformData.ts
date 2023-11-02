import { CommonQueryParams } from "types";
import { NYTRequestParams } from "./types";
import { dateTo8Digit } from "utils";

export function transformData(params?: CommonQueryParams): NYTRequestParams {
  const { q, category, from, to } = params || {};

  const modifiedParams: NYTRequestParams = {
    ...(q !== undefined ? { q } : {}),
    ...(category !== undefined ? { source: category } : {}),
    ...(from !== undefined ? { begin_date: dateTo8Digit(from) } : {}),
    ...(to !== undefined ? { end_date: dateTo8Digit(to) } : {}),
  };
  return modifiedParams;
}
