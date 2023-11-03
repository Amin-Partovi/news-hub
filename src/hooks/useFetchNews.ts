import { SOURCES } from "mockData";
import {
  useGuardianNewsQuery,
  useNYTNewsQuery,
  useNewsAPIQuery,
} from "queries";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CommonQueryParamKeys, CommonQueryParams } from "types";

export function useFetchNews() {
  const [searchParams] = useSearchParams({});

  const queryParams: CommonQueryParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { data: guardianNews, isFetching: isFetchingGuardian } =
    useGuardianNewsQuery(
      { ...queryParams },
      searchParams.get("source") === SOURCES.GUARDIAN ||
        searchParams.get("source") === SOURCES.ALL ||
        !searchParams.get("source")
    );

  const { data: nytNews, isFetching: isFetchingNYT } = useNYTNewsQuery(
    { ...queryParams },
    searchParams.get("source") === SOURCES.NYT ||
      searchParams.get("source") === SOURCES.ALL ||
      !searchParams.get("source")
  );
  const { data: news, isFetching: isFetchingNewsAPI } = useNewsAPIQuery(
    { ...queryParams },
    searchParams.get("source") === SOURCES.NEW_API ||
      searchParams.get("source") === SOURCES.ALL ||
      !searchParams.get("source")
  );

  // filter news api result client side

  const filteredNewsByAuthor = useMemo(() => {
    if (!searchParams.get(CommonQueryParamKeys.AUTHOR)) {
      return news;
    }
    return news?.filter((article) =>
      article.author
        ?.toLowerCase()
        .includes(
          searchParams.get(CommonQueryParamKeys.AUTHOR)?.toLowerCase() as string
        )
    );
  }, [searchParams, news]);

  return {
    guardianNews,
    nytNews,
    news: filteredNewsByAuthor,
    isFetching: isFetchingGuardian || isFetchingNYT || isFetchingNewsAPI,
  };
}
