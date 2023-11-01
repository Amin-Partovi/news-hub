import { CommonQueryParams } from "types";
import { NYTRequestParams } from "./types";
import { formatDate } from "utils";

export function transformData(params?: CommonQueryParams): NYTRequestParams {
  const { q, category, from, to } = params || {};
  console.log(Date.parse(from as string), from);
  const modifiedParams: NYTRequestParams = {
    ...(q !== undefined ? { q } : {}),
    ...(category !== undefined ? { source: category } : {}),
    ...(from !== undefined ? { begin_date: formatDate(from) } : {}),
    ...(to !== undefined ? { end_date: formatDate(to) } : {}),
  };
  return modifiedParams;
}
