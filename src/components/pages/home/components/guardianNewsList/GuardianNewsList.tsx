import { ArticleCard } from "components/fragments";
import { GuardianArticle } from "queries";
import GuardianLogo from "assets/guardian-logo.png";

const GuardianNewsList = ({ news }: { news?: GuardianArticle[] }) => {
  if (!news || !news.length) {
    return;
  }

  return (
    <>
      {news.map((article) => (
        <ArticleCard
          title={article.webTitle}
          img={article.fields.thumbnail}
          author={article.tags[0].webTitle}
          sectionName={article.sectionName}
          pubDate={article.webPublicationDate}
          webUrl={article.webUrl}
          key={article.id}
          logo={GuardianLogo}
        />
      ))}
    </>
  );
};

export default GuardianNewsList;
