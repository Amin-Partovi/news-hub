import NewsAPILogo from "assets/newsAPI-logo.png";
import { ArticleCard } from "components/fragments";
import { NewsAPIArticle } from "queries";

const NewsList = ({ news }: { news?: NewsAPIArticle[] }) => {
  if (!news || !news.length) {
    return;
  }

  return (
    <>
      {news.map((article) => (
        <ArticleCard
          title={article.title}
          author={article.author}
          pubDate={article.publishedAt}
          webUrl={article.url}
          key={article.title}
          logo={NewsAPILogo}
        />
      ))}
    </>
  );
};

export default NewsList;
