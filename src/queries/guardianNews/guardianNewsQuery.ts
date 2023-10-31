import { useQuery } from "@tanstack/react-query";
import { ROUTES, Request } from "utils";
import { GuardianRequestParams, GuardianRootData } from "./types";

const INITIAL_PARAMS: GuardianRequestParams = {
  "show-fields": ["body", "lastModified", "publication", "thumbnail"],
  "show-references": "author",
  "show-tags": ["contributor", "blog", "publication"],
};

function getGuardianNews(params?: GuardianRequestParams) {
  return Request<GuardianRootData, Error>({
    endpoint: ROUTES.getGuardianNewsList,
    params: {
      "api-key": process.env.REACT_APP_GUARDIAN_API_KEY as string,
      ...INITIAL_PARAMS,
      ...params,
    },
  });
}

export function useGuardianNewsQuery(params?: GuardianRequestParams) {
  return useQuery({
    queryKey: ["guaridan-news"],
    queryFn: () => getGuardianNews(params),
    select: (data: GuardianRootData) => data.data.response.results,
  });
}
