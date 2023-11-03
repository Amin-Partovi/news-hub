import { useQuery } from "@tanstack/react-query";
import { ROUTES, Request } from "utils";
import { NYTRootData } from "./types";
import { CommonQueryParams } from "types";
import { transformData } from "./transformData";

function getNYTNews(params?: CommonQueryParams) {
  const modifiedParams = transformData(params);
  return Request<NYTRootData, Error>({
    endpoint: ROUTES.getNYTNewsList,
    params: {
      "api-key": process.env.REACT_APP_NYT_API_KEY as string,
      ...modifiedParams,
    },
  });
}

export const NYTNewsQueryKeys = Object.freeze({
  all: ["NYT-news"],
  list: (params?: CommonQueryParams) => [
    ...NYTNewsQueryKeys.all,
    ...Object.values(params ?? {}),
  ],
});

export function useNYTNewsQuery(params?: CommonQueryParams, enabled?: boolean) {
  return useQuery({
    queryKey: ["NYT-news", params],
    queryFn: () => getNYTNews(params),
    select: (data: NYTRootData) => data.data.response.docs,
    enabled,
  });
}
