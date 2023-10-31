import { AxiosResponse } from "axios";

interface Article {
  title: string;
  author: string;
  source: Source;
  publishedAt: string;
  url: string;
}

interface Source {
  id: string;
  name: string;
}

interface Data {
  status: "ok" | "error";
  totalResults: number;
  articles: Article;
}

export type NewsAPIRootData = AxiosResponse<Data>;

export interface NewsAPIRequestParams {
  q?: string;
  searchIn?: "title" | "description" | "content";
  sources?: string;
  domains?: "eg bbc.co.uk" | "techcrunch.com" | "engadget.com";
  excludeDomains?: "eg bbc.co.uk" | "techcrunch.com" | "engadget.com";
  from?: Date;
  to?: Date;
  language?:
    | "ar"
    | "de"
    | "en"
    | "es"
    | "fr"
    | "he"
    | "it"
    | "nl"
    | "no"
    | "pt"
    | "ru"
    | "sv"
    | "ud"
    | "zh";
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  pageSize?: number;
  page?: number;
}
