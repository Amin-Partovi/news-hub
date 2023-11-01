import {
  useGuardianNewsQuery,
  useNYTNewsQuery,
  useNewsAPIQuery,
} from "queries";
import { SOURCES } from "mockData";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CommonQueryParams } from "types";

export function useFetchNews() {
  const [searchParams] = useSearchParams({});

  const queryParams: CommonQueryParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { data: guardianNews } = useGuardianNewsQuery(
    { ...queryParams },
    searchParams.get("source") === SOURCES.GUARDIAN ||
      searchParams.get("source") === SOURCES.ALL ||
      !searchParams.get("source")
  );

  const { data: nytNews } = useNYTNewsQuery(
    { ...queryParams },
    searchParams.get("source") === SOURCES.NYT ||
      searchParams.get("source") === SOURCES.ALL ||
      !searchParams.get("source")
  );
  const { data: news } = useNewsAPIQuery(
    { ...queryParams },
    searchParams.get("source") === SOURCES.NEW_API ||
      searchParams.get("source") === SOURCES.ALL ||
      !searchParams.get("source")
  );

  return { guardianNews, nytNews, news };
}
