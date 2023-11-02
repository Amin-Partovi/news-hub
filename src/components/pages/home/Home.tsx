import { useFetchNews } from "hooks/useFetchNews";
import Filters from "./components/filters/Filters";
import GuardianNewsList from "./components/guardianNewsList/GuardianNewsList";
import NYTNewsList from "./components/NYTNewsList/NYTNewsList";
import NewsList from "./components/newsList/NewsList";

const Home = () => {
  const { guardianNews, news, nytNews } = useFetchNews();

  return (
    <>
      <Filters />
      <div className="news-grid py-6">
        <GuardianNewsList news={guardianNews} />
        <NYTNewsList news={nytNews} />
        <NewsList news={news} />
      </div>
    </>
  );
};

export default Home;
