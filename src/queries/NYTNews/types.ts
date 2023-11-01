import { AxiosResponse } from "axios";

interface Doc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: Multimedum[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

interface Multimedum {
  rank: number;
  subtype: string;
  caption: any;
  credit: any;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}

interface Legacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
  widewidth?: number;
  wideheight?: number;
  wide?: string;
}

interface Headline {
  main: string;
  kicker: string;
  content_kicker: any;
  print_headline: any;
  name: any;
  seo: any;
  sub: any;
}

interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

interface Byline {
  original: any;
  person: any[];
  organization: any;
}

interface Response {
  docs: Doc[];
  meta: { hits: number; offset: number; time: number };
}

interface Data {
  copyright: string;
  response: Response;
  status: string;
}

export type NYTRootData = AxiosResponse<Data>;

export interface NYTRequestParams {
  begin_date?: number; //date
  end_date?: number; //date
  facet?: boolean;
  facet_fields?:
    | "day_of_week"
    | "document_type"
    | "ingredients"
    | "news_desk"
    | "pub_month"
    | "pub_year"
    | "section_name"
    | "source"
    | "subsection_name"
    | "type_of_material";
  facet_filter?: boolean;
  fl?: string;
  fq?: string;
  q?: string; //search
  sort?: "newest" | "oldest" | "relevance";
  page?: number;
  source?: string; //category
}

// author is missed
