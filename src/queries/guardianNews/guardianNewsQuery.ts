import { useQuery } from "@tanstack/react-query";
import { ROUTES, Request } from "utils";
import { GuardianRequestParams, GuardianRootData } from "./types";
import { CommonQueryParams } from "types";
import { transformData } from "./transformData";

const INITIAL_PARAMS: GuardianRequestParams = {
  "show-fields": ["body", "lastModified", "publication", "thumbnail"],
  "show-references": "author",
  "show-tags": ["contributor", "blog", "publication"],
};

function getGuardianNews(params?: CommonQueryParams) {
  const modifiedParams = transformData(params);

  return Request<GuardianRootData, Error>({
    endpoint: ROUTES.getGuardianNewsList,
    params: {
      "api-key": process.env.REACT_APP_GUARDIAN_API_KEY as string,
      ...INITIAL_PARAMS,
      ...modifiedParams,
    },
  });
}

export function useGuardianNewsQuery(
  params?: CommonQueryParams,
  enabled?: boolean
) {
  return useQuery({
    queryKey: ["guaridan-news", params],
    queryFn: () => getGuardianNews(params),
    select: (data: GuardianRootData) => data.data.response.results,
    enabled,
  });
}
