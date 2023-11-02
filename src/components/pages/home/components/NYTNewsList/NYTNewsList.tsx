import { ArticleCard } from "components/fragments";
import { NYTArticle } from "queries";
import NYTLogo from "assets/nyt-logo.png";

const NYT_ASSET_URL = process.env.REACT_APP_NYT_ASSET_URL;

const NYTNewsList = ({ news }: { news?: NYTArticle[] }) => {
  if (!news || !news.length) {
    return;
  }

  function imageUrl(path: string) {
    if (!path) return;
    return `${NYT_ASSET_URL}/${path}`;
  }

  return (
    <>
      {news.map((article) => (
        <ArticleCard
          img={imageUrl(article.multimedia?.[0]?.url)}
          title={article.abstract}
          author={article.byline.original}
          sectionName={article.section_name}
          pubDate={article.pub_date}
          webUrl={article.web_url}
          key={article._id}
          logo={NYTLogo}
        />
      ))}
    </>
  );
};

export default NYTNewsList;
