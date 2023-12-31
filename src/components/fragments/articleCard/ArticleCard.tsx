import { dateToShortFormat } from "utils";
import { Card, CardContent, CardHeader, CardTitle } from "components/elements";
import ArticleImage from "./ArticleImage";

export interface ArticleCardProps {
  img?: string;
  sectionName?: string;
  author: string;
  pubDate: string;
  title: string;
  webUrl: string;
  logo: string;
}

const ArticleCard = ({
  img,
  sectionName,
  author,
  pubDate,
  title,
  webUrl,
  logo,
}: ArticleCardProps) => {
  return (
    <Card>
      <a href={webUrl} target="_blank" rel="noreferrer">
        <CardHeader>
          <CardTitle>{title}</CardTitle>

          <CardContent>
            <div className="flex justify-between gap-4">
              <ArticleImage src={img} alt={title} />

              <div className="flex flex-col gap-2">
                <span className="font-semibold">
                  {dateToShortFormat(pubDate)}
                </span>

                <span className="text-primary line-clamp-3">{author}</span>

                <span>{sectionName}</span>
              </div>
            </div>
          </CardContent>
        </CardHeader>

        <img
          width={100}
          src={logo}
          alt="news source"
          className="absolute left-2 bottom-2 z-10"
        />
      </a>
    </Card>
  );
};

export default ArticleCard;
