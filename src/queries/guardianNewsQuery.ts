import { useQuery } from "@tanstack/react-query";
import { ROUTES, Request } from "utils";

function getGuardianNews() {
  return Request({
    endpoint: ROUTES.getGuardianNewsList,
    params: { "api-key": process.env.REACT_APP_GUARDIAN_API_KEY },
  });
}

export function useGuardianNewsQuery() {
  return useQuery({
    queryKey: ["guaridan-news"],
    queryFn: getGuardianNews,
    select: (data) => data.data.response.results,
  });
}
