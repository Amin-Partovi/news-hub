import { AxiosResponse } from "axios";

export interface NewsAPIArticle {
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
  articles: NewsAPIArticle[];
}

export type NewsAPIRootData = AxiosResponse<Data>;

export interface NewsAPIRequestParams {
  q?: string; //search
  searchIn?: "title" | "description" | "content";
  sources?:
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology"; //category
  domains?: "eg bbc.co.uk" | "techcrunch.com" | "engadget.com";
  excludeDomains?: "eg bbc.co.uk" | "techcrunch.com" | "engadget.com";
  from?: Date; //date
  to?: Date; //date
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
