import { useFetchNews } from "hooks";
import { TEXTS } from "texts";

import NYTNewsList from "./components/NYTNewsList/NYTNewsList";
import Filters from "./components/filters/Filters";
import GuardianNewsList from "./components/guardianNewsList/GuardianNewsList";
import NewsList from "./components/newsList/NewsList";

const Home = () => {
  const { guardianNews, news, nytNews, isFetching } = useFetchNews();

  function emptyState() {
    if (
      !guardianNews?.length &&
      !news?.length &&
      !nytNews?.length &&
      !isFetching
    ) {
      return <h2 className="text-2xl text-center mt-10">{TEXTS.NOT_FOUND}</h2>;
    }
  }

  return (
    <>
      <Filters />

      {emptyState()}
      <div className="news-grid py-6">
        <GuardianNewsList news={guardianNews} />

        <NYTNewsList news={nytNews} />

        <NewsList news={news} />
      </div>
    </>
  );
};

export default Home;
