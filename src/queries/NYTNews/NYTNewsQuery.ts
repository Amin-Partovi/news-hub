import { useQuery } from "@tanstack/react-query";
import { ROUTES, Request } from "utils";
import { NYTRootData } from "./types";
import { NewsAPIRequestParams } from "queries/newsAPI/types";

function getNYTNews(params?: NewsAPIRequestParams) {
  return Request<NYTRootData, Error>({
    endpoint: ROUTES.getNYTNewsList,
    params: {
      "api-key": process.env.REACT_APP_NYT_API_KEY as string,
      ...params,
    },
  });
}

export function useNYTNewsQuery(params?: NewsAPIRequestParams) {
  return useQuery({
    queryKey: ["NYT-news"],
    queryFn: () => getNYTNews(params),
    select: (data: NYTRootData) => data.data.response,
  });
}
