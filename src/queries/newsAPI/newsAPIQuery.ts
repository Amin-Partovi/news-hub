import { useQuery } from "@tanstack/react-query";

import { ROUTES, Request } from "utils";
import { NewsAPIRequestParams, NewsAPIRootData } from "./types";
import { CommonQueryParams } from "types";

const INITIAL_PARAMS: NewsAPIRequestParams = {
  domains: "techcrunch.com",
  pageSize: 10,
  language: "en",
};

function getNewsAPI(params?: CommonQueryParams) {
  return Request<NewsAPIRootData, Error>({
    endpoint: ROUTES.getNewsList,
    params: {
      apiKey: process.env.REACT_APP_NEWS_API_KEY as string,
      ...INITIAL_PARAMS,
      ...params,
    },
  });
}

export const newsAPIQueryKeys = Object.freeze({
  all: ["news-api"],
  list: (params?: CommonQueryParams) => [
    ...newsAPIQueryKeys.all,
    ...Object.values(params ?? {}),
  ],
});

export function useNewsAPIQuery(params?: CommonQueryParams, enabled?: boolean) {
  return useQuery({
    queryKey: ["news-api", params],
    queryFn: () => getNewsAPI(params),
    select: (data: NewsAPIRootData) => data.data.articles,
    enabled,
  });
}
